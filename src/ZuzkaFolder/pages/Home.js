import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const StyledHome = styled.div`
  height: 100vh;
  position: relative;
  > div {
    position: absolute;
    text-align: center;
    top: 30%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    button {
      margin-top: 2rem;
      padding: 0.5rem 1.5rem;
    }
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <div>
        <h1>Welcome home</h1>
        <div>Look what happens in Events section</div>
        <Link to="/events">
          <Button color="white" colorBackground="red">
            Events
          </Button>
        </Link>
      </div>
    </StyledHome>
  );
};

export default Home;
