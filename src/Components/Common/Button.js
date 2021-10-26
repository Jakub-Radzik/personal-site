import React from 'react';
import styled from "styled-components";

function Button({desc}) {
    const Button = styled.button`
      height: 120px;
      width: 100%;
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
      font-size: 0.7em;
      
      @media(max-width: 1800px){
        //font-size: 2em;
      }
      @media(max-width: 1000px){
        height: 60px;
        width: 100%;
        font-size: 0.5em;
      }
      
      
      :hover{
        border-color: yellow transparent;
        >h1{
          color: yellow;
        }
      }
    `
    return (
        <Button>
            {desc}
        </Button>
    );
}

export default Button;