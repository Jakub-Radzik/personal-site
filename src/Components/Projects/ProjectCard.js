import React from 'react';
import styled from "styled-components";
import Tag from "../Common/Tag";
import Button from "../Common/Button";

function ProjectCard({title, description, stack, repoURL, siteURL, banner, universityRepo, frontendRepo}) {
    const background = '#bf5b5b';
    const background2 = '#c14949';

    const Card = styled.div`
      background: ${background};
      color: white;
      width: 90%;
      max-width: 800px;
      min-height: 650px;
      border-radius: 20px;
      margin: 20px;
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
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

    const Tags = styled.div`
      padding: 0 20px;
    `

    const Description = styled.p`
      padding: 10px 20px;
      text-align: justify;
      margin: 0 2px;
      font-size: clamp(0.9rem, 3vw, 1.2rem);
    `

    const Stack = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 10px 20px;
      background: #ffffff;
      border: 5px solid ${background}
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
      @media (min-width: 300px) {
        justify-content: space-around;
      }

      * {
        background: ${background2};
      }
    `

    return (
        <Card>
            <ImageCard/>
            <Title>{title}</Title>
            <Content>
                <Tags>
                    {
                        universityRepo && <Tag text={"University Project"} bgcolor={'#4646e5'} color={'#fff'}/>
                    }
                    {
                        frontendRepo && <Tag text={"Frontend Project"} bgcolor={'#8b0ae7'} color={'#fff'}/>
                    }
                </Tags>
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
      border: 3px solid black;
      border-radius: 20px;
      
      :hover{
        background: red;
      }
    `

    return <a href={url}>
        <Button>
            {title}
        </Button>
    </a>
}

export default ProjectCard;
