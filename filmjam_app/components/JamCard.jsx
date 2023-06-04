import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  width: 500px;
  border: 1px solid black;
`;

const JamTopSection = styled.div`
  display: flex;
  gap: 10px;
`;

const Image = styled.img`
  height: 100px;
`;

const MainInfo = styled.div``;

const Title = styled.h2`
  margin: 0;
`;

const HostInfo = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
`;

const JamDesc = styled.p`
  margin: 0;
  font-size: 12px;
  color: grey;
`;

const JamCard = ({ jam }) => {
  return (
    <Container>
      <JamTopSection>
        <Image src="https://img.itch.zone/aW1hZ2UyL2phbS8zMjk0MTYvMTE2NTA5ODIucG5n/original/kSruwo.png" />
        <MainInfo>
          <Title>{jam.title}</Title>
          <JamDesc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            optio debitis?
          </JamDesc>
          <HostInfo>
            Hosted by <span style={{ textDecoration: "underline" }}>MattS</span>
          </HostInfo>
        </MainInfo>
      </JamTopSection>
    </Container>
  );
};

export default JamCard;
