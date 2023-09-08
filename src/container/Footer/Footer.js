import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import styled from "styled-components";

import "./Footer.css";

const FooterContainer = styled.div`
  position: relative;
  z-index: 1;
  font-family: var(--font-long);
  text-transform: uppercase;
  color: white;
  font-size: 1.1rem;
  font-weight: 100;
  letter-spacing: 0.05em;
  background: var(--color-black);
  text-align: center;
  padding: 1rem 1rem 2rem 1rem;
  margin: auto;
  height: 100%;
`;

const FooterIcons = styled.div`
  margin-top: 0.5rem;

  svg {
    color: var(--color-white);
    margin: 0.5rem;
    font-size: 24px;
    cursor: pointer;
    &:hover {
      color: var(--color-grey);
    }
  }
`;

const FooterCopyright = styled.p`
  margin-top: 0.75rem;
  margin-bottom: 0;
`;

const Footer = () => (
  <FooterContainer>
    <FooterIcons>
      <FiFacebook />
      <FiTwitter />
      <FiInstagram />
    </FooterIcons>

    <FooterCopyright>
      2022 Poblano's Grill. All Rights reserved.
    </FooterCopyright>
    {/* </div> */}
  </FooterContainer>
);

export default Footer;
