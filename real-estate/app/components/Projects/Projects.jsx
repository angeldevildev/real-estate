import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import first from "./first.png";

const MiniTitle = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 19.2px */
`;

const Title = styled.h1`
  width: 495px;
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 60px */
  @media (max-width: 644px) {
    font-size: 40px;
  }
  @media (max-width: 558px) {
    width: 90%;
  }
  @media (max-width: 382px) {
    font-size: 30px;
  }
`;

const TitleContainer = styled.div`
  margin: 50px;
`;

const Container = styled.div`
  margin-top: 200px;
`;

const ProjectsBoxContainer = styled.div`
  margin-right: 100px;
  margin-top: 50px;
  width: 100%; 
  @media (max-width: 1268px) {
    width: auto; 
    margin-right: 100;
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  border-radius: 14px;
  @media (max-width: 384px) {
    width: 80%;
  }
`;

const ProjectsContainer = styled.div`
    margin: 50px;
    display: flex;
    @media (max-width: 1268px) {
        flex-wrap: wrap;
    }
`;

export function ProjectsBox({ title, description, rating, imgPath, alt }) {
  return (
    <ProjectsBoxContainer>
      {imgPath && (
        <ImageContainer>
          <StyledImage src={imgPath} alt={alt} width={447} height={263} />
        </ImageContainer>
      )}
      <h2
        style={{
          fontSize: 21,
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "290%",
          marginTop: 15,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          width: 329,
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 400,
        }}
      >
        {description}
      </p>
      <p
        style={{
          fontSize: 16,
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "120%",
          marginTop: 20,
        }}
      >
        {rating}
      </p>
    </ProjectsBoxContainer>
  );
}

export default function Projects() {
  return (
    <Container>
      <TitleContainer>
        <MiniTitle>Best Project of the Years</MiniTitle>
        <Title>Our recent projects</Title>
      </TitleContainer>
      <ProjectsContainer>
        <ProjectsBox
          title="Sobha Hearland II Villas"
          description="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum."
          imgPath={first}
          alt="Sobha Hearland II Villas"
          rating="Rating: 4.83"
        />
        <ProjectsBox
          title="Sobha Hearland II Villas"
          description="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum."
          imgPath={first}
          alt="Sobha Hearland II Villas"
          rating="Rating: 4.83"
        />{" "}
        <ProjectsBox
          title="Sobha Hearland II Villas"
          description="Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum."
          imgPath={first}
          alt="Sobha Hearland II Villas"
          rating="Rating: 4.83"
        />
      </ProjectsContainer>
    </Container>
  );
}
