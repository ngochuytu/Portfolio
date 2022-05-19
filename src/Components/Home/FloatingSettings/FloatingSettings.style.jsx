import styled from "styled-components";

const SettingsContainer = styled.ul`
    --background-color-settings-container: #212532;
    --item-translate-scale: ${props => props.active ? "35px" : "8px"};
    --item-size: ${props => props.active ? "30px" : "7px"};
    --item-background: ${props => props.active ? "#333849" : "#fff"};
    --item-transition-delay-scale: 0.1s;
    --icon-size: ${props => props.active ? "20px" : "0px"};
    --transition-duration: 0.3s;
    --transition-timing-function: ease-out;

    position: fixed;
    z-index: 10000;
    background: var(--background-color-settings-container);
    top: 15px;
    right: 15px;
    width: ${props => props.active ? "70px" : "40px"};
    height: ${props => props.active ? "100px" : "40px"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    transition: height var(--transition-duration) var(--transition-timing-function);
    transition-delay: ${props => props.active ? "0" : "0.2s"}; /*--item-transition-delay-scale * highestDelay*/
`;

const SettingsItem = styled.li`
    position: absolute;
    background-color: var(--item-background);
    width: var(--item-size);
    height: var(--item-size);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transform: ${props => `translate(calc(var(--item-translate-scale) * ${props.posX}), calc(var(--item-translate-scale) * ${props.posY}))`};
    transition: transform var(--transition-duration) var(--transition-timing-function),
                background-color var(--transition-duration) var(--transition-timing-function),
                width var(--transition-duration) var(--transition-timing-function),
                height var(--transition-duration) var(--transition-timing-function);
    transition-delay: ${props => `calc(var(--item-transition-delay-scale) * ${props.delay})`};

    &:hover{
        filter: brightness(1.2);
    }

    & > :first-child{
        /* For fontAwesome */
        font-size: var(--icon-size);
        color: var(--background-color-primary);
        
        /* For images */
        width: var(--icon-size);
        height: var(--icon-size);
    }
`;

export { SettingsContainer, SettingsItem };