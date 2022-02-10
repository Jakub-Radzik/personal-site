import React from 'react';
import styled from 'styled-components';

function SocialButton(props) {
  const Button = styled.button`
    width: 80%;
    height: 120px;
    background: transparent;
    border: 5px solid;
    border-color: transparent yellow;
    border-radius: 80px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    transition-duration: 0.3s;
    margin: auto;

    @media (max-width: 1800px) {
      //font-size: 2em;
    }
    @media (max-width: 1000px) {
      height: 60px;
      width: 100%;
    }

    :hover {
      border-color: yellow transparent;
      padding-left: 50px;
      > h1 {
        color: yellow;
      }
    }
  `;

  const Icon = styled.img`
    height: 70%;
  `;

  const Description = styled.h1`
    font-color: white;
    font-size: 3em;
    width: 80%;
    font-family: 'PT Sans', sans-serif;
    letter-spacing: 4px;
    text-align: left;
    @media (max-width: 1800px) {
      font-size: 2em;
    }
    @media (max-width: 1000px) {
      font-size: 1em;
    }
  `;

  return (
    <Button>
      <Icon src={props.image}></Icon>
      <Description>{props.txt}</Description>
    </Button>
  );
}

export default SocialButton;
