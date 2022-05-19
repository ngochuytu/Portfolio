import styled from "styled-components";

const Container = styled.div`
    position: relative;
    background-color: var(--background-color-primary);
    padding: 0 var(--padding-horizontal-page);
    
    & > :first-child{
        max-width: 2000px;
        margin: 0 auto;
    }
`;

export { Container };