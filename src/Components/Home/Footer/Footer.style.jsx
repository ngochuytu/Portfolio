import styled from "styled-components";

const FooterContainer = styled.footer`
    position: relative;
    background-color: #000;
    color: white;
    text-align: center;
    align-self: start;
    padding: 55px 20px 100px 20px;
`;

const Logo = styled.h1`
    margin-bottom: 15px;
`;

const Navigation = styled.nav`
    margin-bottom: 20px;
`;

const NavigationList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`;

const NavigationListItem = styled.li`
    position: relative;

    &::before{
        content: "";
        position: absolute;
        background-color: var(--color-accent);
        bottom: 0;
        width: 100%;
        height: 1px;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform .25s linear;
    }

    &:hover::before,
    &:focus-visible::before{
        transform: scaleX(1);
    }
`;

const Link = styled.a``;

const Socials = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 15px;
`;

const SocialIconWrapper = styled.li`
    --color: ${props => props.iconColor};
    --line-height-icon: 1.2;
    
    position: relative;

    &::before{
        content: "${props => props.iconUnicode}";
        font-family: fontAwesome;
        position: absolute;
        font-size: 30px;
        color: var(--color);
        line-height: var(--line-height-icon);
        top: 0;
        left: 0;
        height: 0;
        overflow: hidden;
        border-bottom: 2px solid var(--color);
        transition: 0.5s linear;
    }

    &:hover::before,
    &:focus-visible::before{
        height: 100%;
        pointer-events: none;
    }
`;

const SocialLink = styled.a`
    i{
        font-size: 30px;
        color: #555;
        line-height: var(--line-height-icon);
    }
`;

const CopyRights = styled.p``;

export { FooterContainer, Logo, Navigation, NavigationList, NavigationListItem, Link, Socials, SocialIconWrapper, SocialLink, CopyRights };