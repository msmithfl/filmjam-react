import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div``;

const JamContainer = styled.div`
  margin-top: 20px;
`;

const TopText = styled.p``;

const Button = styled.button``;

const Jams = () => {
  return (
    <Container>
      <Wrapper>
        <TopText>
          filmjam.io is a community space for users to create and participate in
          filmjams.
        </TopText>
        <Link
          to="/jams/create"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button>Create a jam!</Button>
        </Link>
        <JamContainer>Jams</JamContainer>
      </Wrapper>
    </Container>
  );
};

export default Jams;
