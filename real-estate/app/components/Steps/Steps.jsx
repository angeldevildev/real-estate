"use client";

import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import messages from "./messages.png";
import sms from "./sms.png";
import registered from "./registered.png";

const Container = styled.div``;

const MiniTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  width: 788px;
  color: #fff;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 250%;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 802px) {
    font-size: 40px;
    width: 60%
  }
`;

const TextContainer = styled.div``;

const AllStepsContainer = styled.div`
  margin-top: 20px;
  @media (max-width: 1519px) {
        p {
            width: 80%
        }
    }
`;

const ImageContainer = styled.div`
  text-align: center; 
  display: flex;
  width: 60px;
  height: 75px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 5px;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
`;

const StepsContainer = styled.div`
    display: flex;
    margin-top: 50px;
    margin: 60px;
    @media (max-width: 1519px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export function AllSteps({ title, description, imagePath, alt }) {
  return (
    <AllStepsContainer>
      {imagePath && (
        <ImageContainer>
          <StyledImage src={imagePath} alt={alt} width={300} height={200} />
        </ImageContainer>
      )}
      <h2
        style={{
          fontSize: 28,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "120%",
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "250%",
        }}
      >
        {description}
      </p>
    </AllStepsContainer>
  );
}

export default function Steps() {
  return (
    <Container>
      <TextContainer>
        <MiniTitle>Three steps: three minutes</MiniTitle>
        <Title>Everything should be this easy.</Title>
      </TextContainer>
      <StepsContainer>
        <AllSteps
          title="Answer Questions"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagePath={messages}
          alt="Message"
        />
        <AllSteps
          title="Select a quote"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagePath={sms}
          alt="SMS"
        />
        <AllSteps
          title="Get registered"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagePath={registered}
          alt="Registered"
        />
      </StepsContainer>
    </Container>
  );
}
