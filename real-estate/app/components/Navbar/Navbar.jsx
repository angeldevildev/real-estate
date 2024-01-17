"use client";

import React, { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import styled from "@emotion/styled";
import Image from "next/image";
import logo from "./Logo.png";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const ContainerNavbar = styled.div`
  max-width: 1380px;
  margin: 0 auto;
  margin-top: 40px;
  height: 90px;
  flex-shrink: 0;
  border-radius: 70px;
  background: #121212;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  @media (max-width: 1000px) {
   background: none;
  }
`;

const ContainerList = styled.div`
  display: flex;
  list-style: none;
  margin-right: 0%;
  min-width: 571px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #0d0d0d;
  align-items: center;
  justify-content: center;
  @media (max-width: 1078px) {
    min-width: 500px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const ListItem = styled.li`
  margin-right: 20px;
`;

const ImageContainer = styled.div`
  margin-left: 50px;
  margin-top: -10px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const OtherServices = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  margin-right: -5%;
  @media (max-width: 1212px) {
    margin-right: 0.1%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const ContactUsBtn = styled.button`
  display: inline-flex;
  height: 60px;
  padding: 15px 35px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid #bebebe;
  background: #0d0d0d;
  margin-right: 5%;
  @media (max-width: 1122px) {
    padding: 10px 20px;
  }
  @media (max-width: 1078px) {
    margin-right: 5%;
  }
  @media (max-width: 1010px) {
    padding: 5px 15px;
    margin-right: 3%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <ContainerNavbar>
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar__close">
          <IconX width={30} height={30} />
        </div>
        <MobileNavbar />
      </div>
      <ImageContainer>
        <Image alt="logo" src={logo} />
      </ImageContainer>
      <ContainerList>
        <ListItem>About Us</ListItem>
        <ListItem>Projects</ListItem>
        <ListItem>Agents</ListItem>
        <ListItem>Services</ListItem>
        <ListItem>Listings</ListItem>
      </ContainerList>
      <OtherServices>Other Services</OtherServices>
      <ContactUsBtn>Contact Us</ContactUsBtn>
      <div className="mobile-hamb" onClick={openNav}>
        <IconMenu2 width={30} height={30} />
      </div>
    </ContainerNavbar>
  );
}
