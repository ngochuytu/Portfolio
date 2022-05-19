import styled from "styled-components";

const ProgressBar = styled.div`
    position: fixed;
    z-index: 3;
    background-color: var(--color-accent);
    left: 0;
    bottom: 0;
    width: ${props => props.scrollProgress}%;
    height: 3px;
`;

export { ProgressBar };