import React, { useState, useEffect, useReducer, useRef } from 'react';
import { useSettingsContext } from "../../../Contexts/SettingsContext";
import { useNotificationsContext } from "../../../Contexts/NotificationsContext";
import { ContactContainer, ContactTitle, ContactContent, LeftContent, ContactForm, PlaceHolder, Line, FieldGroup, Input, TextArea, RightContent, Buttons, Button } from "./Contact.style";
import LeafletMap from "./LeafletMap";
import emailjs from '@emailjs/browser';

const initialFormValues = {
    email: {
        value: "",
        error: null
    },
    name: {
        value: "",
        error: null
    },
    subject: {
        value: "",
        error: null
    },
    message: {
        value: "",
        error: null
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_VALUE":
            return { ...state, [action.name]: { ...state[action.name], value: action.payload } };
        case "SET_ERROR":
            return { ...state, [action.name]: { ...state[action.name], error: action.payload } };
        case "RESET_FORM":
            return { ...initialFormValues };
        default:
            return state;
    }
};

const multiLanguageContent = {
    en: {
        title: "Contact",
        email: "Email",
        name: "Name",
        subject: "Subject",
        message: "Message",
        send: "Send",
    },
    vn: {
        title: "Liên hệ",
        email: "Email",
        name: "Họ và tên",
        subject: "Chủ đề",
        message: "Nội dung",
        send: "Gửi",
    }
};

const emailJSConfig = {
    serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function Contact() {
    const [resetNextEmailTimeout, setResetNextEmailTimeout] = useState(false);
    const [formValues, dispatch] = useReducer(reducer, initialFormValues);
    const isSendingEmail = useRef(false);
    const nextEmailRef = useRef({
        delay: 0,
        intervalId: null
    });
    const { newNotification, newOrUpdateNotification } = useNotificationsContext();
    const { settings: { language } } = useSettingsContext();
    const { title, email, name, subject, message, send } = multiLanguageContent[language];

    const formValidation = {
        email: email => {
            const emailTrimmed = email.trim();
            if (emailTrimmed === "")
                dispatch({ type: "SET_ERROR", name: "email", payload: "Required" });
            else if (!emailRegex.test(emailTrimmed))
                dispatch({ type: "SET_ERROR", name: "email", payload: "Invalid" });
            else
                dispatch({ type: "SET_ERROR", name: "email", payload: "" });
        },

        name: name => {
            const nameTrimmed = name.trim();
            if (nameTrimmed === "")
                dispatch({ type: "SET_ERROR", name: "name", payload: "Required" });
            else
                dispatch({ type: "SET_ERROR", name: "name", payload: "" });
        },

        subject: subject => {
            const subjectTrimmed = subject.trim();
            if (subjectTrimmed === "")
                dispatch({ type: "SET_ERROR", name: "subject", payload: "Required" });
            else
                dispatch({ type: "SET_ERROR", name: "subject", payload: "" });
        },

        message: message => {
            const messageTrimmed = message.trim();
            if (messageTrimmed === "")
                dispatch({ type: "SET_ERROR", name: "message", payload: "Required" });
            else
                dispatch({ type: "SET_ERROR", name: "message", payload: "" });
        }
    };

    const handleInputChange = e => {
        dispatch({ type: "SET_VALUE", name: e.target.name, payload: e.target.value });
        formValidation[e.target.name](e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (isSendingEmail.current) {
            newNotification({
                id: "contact-email-sending",
                type: "error",
                message: "Email is sending",
                duration: 1000,
            });
            return;
        }

        if (nextEmailRef.current.delay <= 0) {
            const email = formValues.email.value;
            const name = formValues.name.value;
            const subject = formValues.subject.value;
            const message = formValues.message.value;

            formValidation.email(email);
            formValidation.name(name);
            formValidation.subject(subject);
            formValidation.message(message);

            if (formValues.email.error === "" && formValues.name.error === "" && formValues.subject.error === "" && formValues.message.error === "") {
                const templateParams = {
                    email: email,
                    name: name,
                    subject: subject,
                    message: message
                };

                isSendingEmail.current = true;

                emailjs
                    .send(emailJSConfig.serviceId, emailJSConfig.templateId, templateParams, emailJSConfig.publicKey)
                    .then(() => {
                        newNotification({
                            id: "contact-email-sent",
                            type: "success",
                            message: "Message sent successfully",
                            duration: 2000,
                        });

                        dispatch({ type: "RESET_FORM" });

                        isSendingEmail.current = false;

                        nextEmailRef.current.delay = 30;

                        const interval = setInterval(() => {
                            if (nextEmailRef.current.delay > 0) {
                                nextEmailRef.current.delay = nextEmailRef.current.delay - 1;
                            }
                            else {
                                setResetNextEmailTimeout(!resetNextEmailTimeout);
                            }
                        }, 1000);

                        nextEmailRef.current.intervalId = interval;
                    })
                    .catch(error => {
                        console.error(error);
                        isSendingEmail.current = false;

                        newNotification({
                            id: "contact-email-error",
                            type: "error",
                            message: "Something went wrong! Please try again",
                            duration: 2000,
                        });
                    });
            }
        } else {
            newOrUpdateNotification({
                id: "contact-email-next-send",
                type: "error",
                message: `You can send another email in ${nextEmailRef.current.delay} seconds`,
                duration: 2000,
            });
        }
    };

    useEffect(() => {
        return () => {
            clearInterval(nextEmailRef.current.intervalId);
            nextEmailRef.current.intervalId = null;
        };
    }, [resetNextEmailTimeout]);

    return (
        <ContactContainer>
            <ContactTitle tabIndex={0}>{title}</ContactTitle>
            <ContactContent>
                <LeftContent>
                    <ContactForm onSubmit={handleSubmit} method="POST">
                        <FieldGroup fieldHeight={45} hasValue={formValues.email.value} isValid={!formValues.email.error}>
                            <Input type="text" name="email" value={formValues.email.value} onChange={handleInputChange} />
                            <PlaceHolder>{formValues.email.error ? `${email} - ${formValues.email.error}` : email}</PlaceHolder>
                            <Line></Line>
                        </FieldGroup>
                        <FieldGroup fieldHeight={45} hasValue={formValues.name.value} isValid={!formValues.name.error}>
                            <Input type="text" name="name" value={formValues.name.value} onChange={handleInputChange} />
                            <PlaceHolder>{formValues.name.error ? `${name} - ${formValues.name.error}` : name}</PlaceHolder>
                            <Line></Line>
                        </FieldGroup>
                        <FieldGroup fieldHeight={45} hasValue={formValues.subject.value} isValid={!formValues.subject.error}>
                            <Input type="text" name="subject" value={formValues.subject.value} onChange={handleInputChange} />
                            <PlaceHolder>{formValues.subject.error ? `${subject} - ${formValues.subject.error}` : subject}</PlaceHolder>
                            <Line></Line>
                        </FieldGroup>
                        <FieldGroup fieldHeight={75} hasValue={formValues.message.value} isValid={!formValues.message.error}>
                            <TextArea name="message" value={formValues.message.value} onChange={handleInputChange}></TextArea>
                            <PlaceHolder>{formValues.message.error ? `${message} - ${formValues.message.error}` : message}</PlaceHolder>
                            <Line></Line>
                        </FieldGroup>
                        <Buttons>
                            <Button type="submit">{send}</Button>
                        </Buttons>
                    </ContactForm>
                </LeftContent>
                <RightContent>
                    <LeafletMap />
                </RightContent>
            </ContactContent>
        </ContactContainer>
    );
}

export default Contact;


