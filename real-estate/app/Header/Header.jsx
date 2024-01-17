"use client";

import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import headerimg from "./assets/headerimg.png";

const MiniTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-size: 67px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 80.4px */
  width: 80%;
  margin-top: 30px;
  @media (max-width: 1315px) {
    width: 100%;
  }
  @media (max-width: 1099px) {
    font-size: 50px;
  }
  @media (max-width: 702px) {
    font-size: 40px;
  }
  @media (max-width: 502px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  width: 60%;
  margin-top: 30px;
  @media (max-width: 702px) {
    width: 90%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 438px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #0d0d0d;
  color: white;
  padding: 0 20px;
  border: 1px solid #fff;
  margin-top: 30px;
  outline: none;
  @media (max-width: 702px) {
    width: 350px;
  }
  @media (max-width: 502px) {
    width: 300px;
  }
  @media (max-width: 414px) {
    width: 220px;
  }
`;

const QuoteButton = styled.button`
  width: 150px;
  height: 59px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #e0e0e0;
  color: black;
  border: none;
  margin-left: -145px;
  cursor: pointer;
  margin-top: 30.5px;
  font-weight: 700;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const ImageContainer = styled.div`
  margin-left: 20px;
  @media (max-width: 910px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8.5vh auto; /* Set top margin according to viewport height and centre horizontally */
  border-radius: 15px;
  background: linear-gradient(90deg, #051822 0%, #753a28 100%);
  width: 1600px;
  max-width: 100%;
  @media (max-width: 1598px) {
    width: 1310px;
    padding: 50px 50px;
  }
  @media (max-width: 1315px) {
    width: 1100px;
    padding: 60px 60px;
  }
  @media (max-width: 1099px) {
    width: 900px;
  }
  @media (max-width: 910px) {
    width: 700px;
  }
  @media (max-width: 702px) {
    width: 500px;
  }
  @media (max-width: 502px) {
    width: 400px;
  }
  @media (max-width: 414px) {
    width: 300px;

  }
`;

const TextContainer = styled.div``;

function Header() {
  //Email verification
  const [email, setEmail] = React.useState("");
  const [isValidEmail, setValidEmail] = React.useState(true);
  const [error, setError] = React.useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Validation of the email address using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(newEmail);
    setValidEmail(isValid);

    // Setting the error message
    setError(isValid ? "" : "Please enter a valid email address");
  };

  const handleSubmit = () => {
    if (isValidEmail) {
      console.log("Valid email:", email);
    } else {
      // Handle the case when the email address is invalid
      console.log("Invalid email address");
    }
  };

  return (
    <Container>
      <TextContainer>
        <MiniTitle>Welcome to Realstate</MiniTitle>
        <Title>manage your property</Title>
        <Description>
          Your will have everything nearby supermarket, buses, station, the
          carmen neighborhood, etc
        </Description>
        <InputContainer>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <QuoteButton onClick={handleSubmit}>Get Quote</QuoteButton>
        </InputContainer>
        <ErrorMsg>{error}</ErrorMsg>
      </TextContainer>
      <ImageContainer>
        <Image src={headerimg} alt="home" />
      </ImageContainer>
    </Container>
  );
}

export default Header;
