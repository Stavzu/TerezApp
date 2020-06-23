import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  background: #efefef;
  ul {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    margin: 0 2rem;
    padding: 1rem;

    li {
      margin: 0.5rem 1rem;
      cursor: pointer;
      color: #000;
      transition: all 0.5s ease;
      &:hover {
        color: red;
      }
    }
  }
`;

const headerData = [
  { id: 1, title: "About", route: "/about" },
  { id: 2, title: "Events", route: "/events" },
  { id: 3, title: "Second Item", route: "/secondItem" },
  { id: 4, title: "Third Item", route: "/thirdItem" },
  { id: 5, title: "Home", route: "/" },
];

const Header = () => {
  return (
    <StyledHeader>
      <ul>
        {headerData &&
          headerData.map((data) => {
            return (
              <Link to={`${data.route}`}>
                <li>{data.title}</li>
              </Link>
            );
          })}
      </ul>
    </StyledHeader>
  );
};

export default Header;
