import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: #efefef;
  padding: 0.5rem 1rem;
`;

const Footer = () => {
  return <StyledFooter>Made in 2020</StyledFooter>;
};

export default Footer;
