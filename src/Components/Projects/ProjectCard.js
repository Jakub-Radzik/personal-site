import React from 'react';
import styled from "styled-components";
import Tag from "../Common/Tag";
import Button from "../Common/Button";

function ProjectCard({title, description, stack, repoURL, siteURL, banner, universityRepo}) {
    const Card = styled.div`
      width: 90%;
      max-width: 800px;
      height: 650px;
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
      transform: translateY(-70px);
      height: 100px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const Content = styled.div`
      transform: translateY(-50px);
      border: 1px solid #000;
      margin: 10px 20px;
    `

    const Description = styled.p`
      text-align: justify;
      border: 1px solid #000;
    `

    const Stack = styled.div`
      border: 1px solid #000;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    `

    const StackImage = styled.img`
      width: 50px;
      margin: 0 20px 0 0;
    `;

    const Buttons = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
    `

    return (
        <Card>
            <ImageCard/>
            <Title>{title}</Title>
            <Content>
                {
                    universityRepo && <Tag text={"University Project"} bgcolor={'#00f'} color={'#fff'}/>
                }
                <Description>{description}</Description>
                <Stack>
                    {
                        stack.map(elem => <StackImage src={elem} alt="stack element"/>)
                    }
                </Stack>
                <Buttons>
                    {
                        repoURL && <div> repo < /div>
                    }

                    {
                        siteURL && <div> site < /div>
                    }
                </Buttons>
            </Content>
        </Card>
    );
}

export default ProjectCard;
