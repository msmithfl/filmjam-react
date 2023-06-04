import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cdcdcd;
  border: 1px solid black;
  padding: 20px 50px;
  gap: 10px;
  width: 500px;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 0px;
`;

const InputTitle = styled.h2`
  font-size: 16px;
  margin: 0px;
`;

const Input = styled.input``;

const Button = styled.button``;

const CreateJam = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create a Jam</Title>
        <InputTitle>Title</InputTitle>
        <Input />
        <InputTitle>Description</InputTitle>
        <Input />
        <InputTitle>Start Date</InputTitle>
        <Input />
        <InputTitle>End Date</InputTitle>
        <Input />
        <Button>Create</Button>
      </Wrapper>
    </Container>
  );
};

export default CreateJam;
