import React from 'react';
import styled, { keyframes } from 'styled-components';
import profile from '../../Images/profile.jpg';

function LeftOverview() {
  const Left = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1800px) {
      justify-content: center;
      width: 80%;
    }
    @media (max-width: 1000px) {
      width: 100%;
    }
  `;

  const Profile = styled.img`
    height: 100%;
    border-radius: 100%;
  `;

  const Name = styled.h1`
    font-family: 'Saira Condensed', sans-serif;
    font-size: 3em;
    letter-spacing: 5px;
  `;

  const Description = styled.p`
    width: 90%;
    height: auto;
    font-size: 1.2em;
    //text-align: justify;
    font-family: 'Ubuntu Mono', monospace;
    line-height: 40px;
    //text-indent: 100px;
    @media (max-width: 1000px) {
      line-height: 25px;
    }
  `;

  const Circle = styled.div`
    height: 500px;
    width: 500px;
    position: relative;
    @media (max-width: 1800px) {
      height: 300px;
      width: 300px;
    }
    @media (max-width: 700px) {
      height: 200px;
      width: 200px;
    }
  `;

  const rotate = keyframes`
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    `;

  const duration = '40s';
  const iterationCount = 'infinite';
  const timingFunction = 'linear';

  const Border = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;
    border-radius: 50%;
    border: 6px dashed #e30f0f;
    -webkit-animation-name: ${rotate};
    -webkit-animation-duration: ${duration};
    -webkit-animation-iteration-count: ${iterationCount};
    -webkit-animation-timing-function: ${timingFunction};
    -moz-animation-name: ${rotate};
    -moz-animation-duration: ${duration};
    -moz-animation-iteration-count: ${iterationCount};
    -moz-animation-timing-function: ${timingFunction};
    -ms-animation-name: ${rotate};
    -ms-animation-duration: ${duration};
    -ms-animation-iteration-count: ${iterationCount};
    -ms-animation-timing-function: ${timingFunction};
  `;

  return (
    <Left>
      <Circle>
        <Border />
        <Profile src={profile} alt="me" />
      </Circle>

      <Name>Jakub Radzik</Name>
      <Description>
        Jestem absolwentem Wroc??awskiego Technikum Informatycznego, w kt??rym
        zdoby??em podstawow?? wiedz?? techniczn?? z zakresu budowy komputer??w,
        system??w operacyjnych, sieci, a tak??e tworzenia aplikacji internetowych
        z wykorzystaniem j??zyk??w JavaScript, PHP, CSS i baz danych MySQL.
        Aktualnie studiuj?? Informatyk?? Stosowan?? na Politechnice Wroc??awskiej,
        gdzie zapoznaj?? si?? z technologi?? JAVA. Poza tym systematyzuj?? wiedz?? na
        temat algorytm??w, struktur danych i ci??gle si?? rozwijam.
      </Description>
    </Left>
  );
}

export default LeftOverview;
