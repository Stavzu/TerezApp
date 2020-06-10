import React from "react";
import styled from "styled-components";

const StyledText = styled.div`
  margin-top: 2rem;
  ul {
    list-style: none;
    width: 50%;
    padding: 0;
    margin: 0 auto;
    li {
      background: #fff;
      justify-content: space-between;
      margin: 0 auto;
      padding: 0.5rem 1.5rem;
      margin: 0.5rem;
      display: flex;
      border-radius: 5px;
      span {
        &:last-child {
          font-size: 14px;
          color: #606060;
        }
      }
    }
  }
`;

const myEvents = [
  { id: 1, name: "Webinar React", place: "Prague" },
  { id: 2, name: "Redux meetup", place: "Brno" },
  { id: 3, name: "Javascript meetup", place: "Prague" },
];

const Text = ({ title }) => {
  return (
    <StyledText>
      {title}
      <ul>
        {myEvents &&
          myEvents.map((event) => {
            return (
              <li key={event.id}>
                <span> {event.name}</span>
                <span>City: {event.place}</span>
              </li>
            );
          })}
      </ul>
    </StyledText>
  );
};

export default Text;
