import React from 'react';
import SocialButton from "../Header/SocialButton";
import styled from 'styled-components';

import github from '../../Images/github.png'
import linkedin from '../../Images/linkedin.png'
import cv from '../../Images/cv.png'
import telegram from '../../Images/telegram2.png'
import pdf from "../../Documents/Jakub Radzik alfa.pdf"

function RightOverview() {

    const RightOverview = styled.div`
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    `
    const A = styled.a`
      width: 100%;
      text-decoration: none;
    `

    return (
        <RightOverview>
            <A href={"https://github.com/radzikoska123"}>
                <SocialButton image={github} txt={"See my github"}/>
            </A>

            <A href={"https://www.linkedin.com/in/jakub-radzik-726682174/"}>
            <SocialButton image={linkedin} txt={"Find me on LinkedIn"}/>
            </A>

            <A href={pdf}>
                <SocialButton image={cv} txt={"Download my resume"}/>
            </A>

            <A href={"https://t.me/KubusRadzik"}>
                <SocialButton image={telegram} txt={"Write to me vie Telegram"}/>
            </A>

        </RightOverview>
    );
}

export default RightOverview;