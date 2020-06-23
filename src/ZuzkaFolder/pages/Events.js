import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Text from "../components/Text";

const StyledContainer = styled.div`
  margin: 3rem;
  padding: 2rem;
  background: rgba(255, 0, 0, 0.2);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
`;

const Events = () => {
  const [showText, setShowText] = useState(true);

  const handleToggle = () => {
    setShowText(!showText);
  };

  return (
    <StyledContainer>
      <h1>I am Test App</h1>
      <div>
        <Button onClick={handleToggle} color="white" colorBackground="red">
          {!showText ? "Show me more text" : "Hide text"}
        </Button>
        {showText && (
          <Text title="I am text which you can see after click to button and I am a list of events" />
        )}
      </div>
    </StyledContainer>
  );
};

export default Events;
