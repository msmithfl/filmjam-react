import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import JamCard from "../components/JamCard";

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
  const [jams, setJams] = useState([]);

  useEffect(() => {
    const fetchJams = async () => {
      const res = await axios.get("http://localhost:8800/api/jams");
      setJams(res.data);
    };
    fetchJams();
  }, []);

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
        <JamContainer>
          {jams.map((jam) => (
            <JamCard key={jam._id} jam={jam} />
          ))}
        </JamContainer>
      </Wrapper>
    </Container>
  );
};

export default Jams;
