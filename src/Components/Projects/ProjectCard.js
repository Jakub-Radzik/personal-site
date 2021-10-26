import React from 'react';
import styled from "styled-components";
import Tag from "../Common/Tag";
import Button from "../Common/Button";

function ProjectCard({title, description, stack, repoURL, siteURL, banner, universityRepo}) {
    const background = '#bf5b5b';
    const background2 = '#c14949';

    const Card = styled.div`
      background: ${background};
      color: white;
      width: 90%;
      max-width: 800px;
      min-height: 650px;
      outline: 5px solid ${background};
      outline-offset: -2px;
      border-radius: 20px;
      margin: 20px;
    `;

    const ImageCard = styled.div`
      width: 100%;
      height: 40vh;
      border-radius: 20px 20px 0 0;
      background-image: url(${banner});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `

    const Title = styled.h1`
      background: ${background};
      text-transform: uppercase;
      font-size: clamp(1rem, 5vw, 2rem);
      letter-spacing: 2px;
      border-radius: 30px 30px 0 0;
      border-bottom: 5px solid transparent;
      width: 60%;
      transform: translateY(-85px);
      height: 60px;
      margin: auto;
      padding: 20px 10px 0 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    const Content = styled.div`
      transform: translateY(-50px);
    `

    const Description = styled.p`
      padding: 10px 20px;
      text-align: justify;
      margin: 0 2px;
    `

    const Stack = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 20px;
      margin: 0 2px;
      background: #ffffff;
      border-top: 5px dashed black;
      border-bottom: 5px dashed black;
    `

    const StackImage = styled.img`
      width: 50px;
      margin: 0 20px 0 0;
    `;

    const Buttons = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 20px 0;
      @media(min-width: 300px){
        justify-content: space-around;
      }
      *{
        background: ${background2};
      }
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
                        repoURL && <LinkButton title={'Go to repository'} url={repoURL}/>
                    }

                    {
                        siteURL && <LinkButton title={'Go to site'} url={siteURL}/>
                    }
                </Buttons>
            </Content>
        </Card>
    );
}


function LinkButton({title, url}) {

    const Button = styled.div`
      width: 200px;
      padding: 10px 20px;
      color: white;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 2px;
    `

    return <a href={url}>
        <Button>
            {title}
        </Button>
    </a>
}

export default ProjectCard;
