import React from "react";
import Fade from "react-reveal/Fade";
import { Container } from "./PageContainer.style";

function PageContainer({ id, component, tagName }) {
  return (
    <Container id={id} as={tagName}>
      <Fade fraction={0.1}>{component}</Fade>
    </Container>
  );
}

export default PageContainer;
