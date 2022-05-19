import React, { useState } from 'react';
import { useSettingsContext } from "../../../Contexts/SettingsContext";
import { HeroContainer, HeroText, HeroIntro, HeroJob, BlinkingCursor } from "./Hero.style";
import Typewriter from "typewriter-effect";
import ParticlesBackground from "./ParticlesBackground";


const multiLanguageContent = {
    en: {
        intro: `Hi, I'm <span style="color: var(--color-accent);">Tu Ngoc Huy</span>`,
    },
    vn: {
        intro: `Xin chào, mình là <span style="color: var(--color-accent);">Từ Ngọc Huy</span>`
    }
};

function Hero() {
    const [typewriterIntroCursor, setTypewriterIntroCursor] = useState(true);

    const disableTypewriterIntroCursor = () => setTypewriterIntroCursor(false);

    const { settings: { language } } = useSettingsContext();
    const { intro } = multiLanguageContent[language];

    return (
        <HeroContainer>
            <HeroText>
                <HeroIntro>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(intro)
                                .callFunction(disableTypewriterIntroCursor)
                                .start();
                        }}
                        options={{
                            delay: 50,
                            skipAddStyles: true,
                            cursor: ""
                        }}
                    />
                    {typewriterIntroCursor && <BlinkingCursor>|</BlinkingCursor>}
                </HeroIntro>

                <HeroJob>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(2500)
                                .typeString('Front-end web developer')
                                .pauseFor(2000)
                                .start();
                        }}
                        options={{
                            loop: true,
                            delay: 50,
                            skipAddStyles: true,
                            cursor: "",
                        }}
                    />
                    {!typewriterIntroCursor && <BlinkingCursor>|</BlinkingCursor>}
                </HeroJob>
            </HeroText>

            <ParticlesBackground />
        </HeroContainer>
    );
}

export default Hero;