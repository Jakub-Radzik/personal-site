import React from 'react';
import styled from "styled-components";

function ProjectCard({title, description, stack, repoURL, siteURL, banner}) {
    const Card = styled.div`
      width: 90%;
      max-width: 800px;
      height: 700px;
      outline: 5px solid #000;
      border-radius: 20px;
      margin: 20px;
    `;

    const ImageCard = styled.div`
      width: 100%;
      height: 400px;
      border-radius: 20px 20px 0 0;
      background-image: url(${banner});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `

    const Title = styled.h1`
      background: white;
      border-radius: 30px;
      width: 60%;
      transform: translateY(-60px);
      height: 100px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: 2px solid red;
    `;

    const Description = styled.p`
      text-align: justify;
      border: 1px solid #000;
      transform: translateY(-30px);
      padding: 10px 30px;
    `

    const Stack = styled.div`
      border: 1px solid #000;
      transform: translateY(-30px);
      padding: 10px 30px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    `

    const StackImage = styled.img`
      width: 50px;
      margin: 0 10px 0 0;
    `;

    return (
        <Card>
            <ImageCard/>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Stack>
                {
                    stack.map(elem=> <StackImage src={elem} alt="stack element"/>)
                }
            </Stack>
            <div>
                <div>go to repo</div>
                <div>go to site</div>
            </div>
        </Card>
    );
}

export default ProjectCard;
