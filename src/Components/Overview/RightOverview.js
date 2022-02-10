import React from 'react';
import SocialButton from '../Header/SocialButton';
import styled from 'styled-components';

import github from '../../Images/icons/github.png';
import linkedin from '../../Images/linkedin.png';
import cv from '../../Images/cv.png';
import telegram from '../../Images/telegram2.png';
import pdfPL from '../../Documents/Jakub Radzik CV PL.pdf';
import pdfENG from '../../Documents/Jakub Radzik CV ENG.pdf';

function RightOverview() {
  const RightOverview = styled.div`
    min-height: 100vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 1800px) {
      width: 80%;
      min-height: auto;
    }
    @media (max-width: 1000px) {
      width: 100%;
    }
  `;
  const A = styled.a`
    width: 100%;
    text-decoration: none;
    @media (max-width: 1800px) {
      width: 80%;
    }
  `;

  return (
    <RightOverview>
      <A href={'https://github.com/radzikoska123'}>
        <SocialButton image={github} txt={'See my github'} />
      </A>

      <A href={'https://www.linkedin.com/in/jakub-radzik-726682174/'}>
        <SocialButton image={linkedin} txt={'Find me on LinkedIn'} />
      </A>

      <A href={pdfPL}>
        <SocialButton image={cv} txt={'Download my resume PL'} />
      </A>

      <A href={pdfENG}>
        <SocialButton image={cv} txt={'Download my resume ENG'} />
      </A>

      <A href={'https://t.me/KubusRadzik'}>
        <SocialButton image={telegram} txt={'Write to me vie Telegram'} />
      </A>
    </RightOverview>
  );
}

export default RightOverview;
