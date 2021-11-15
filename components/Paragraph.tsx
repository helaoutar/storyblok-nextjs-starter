import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
`;

const Paragraph = (props) => {
  // content is the name we defined for our field in storyblok
  const { content } = props.content;
  return (
    <Container>
      <h1>{content}</h1>
    </Container>
  );
};

export default Paragraph;
