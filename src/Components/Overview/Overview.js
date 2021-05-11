import React from 'react';
import styled, {keyframes} from 'styled-components';
import LeftOverview from "./LeftOverview";
import RightOverview from "./RightOverview";

function Overview() {

    const GradientAnimation = keyframes`
      0%{background-position:0% 28%}
      50%{background-position:100% 73%}
      100%{background-position:0% 28%}
    `;



    const Overview = styled.div`
      height: 100vh;
      width: 100%;
      //background: #235789;
      color: #FDFFFC;
      border-top: 5px solid #d9385e;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      background: linear-gradient(304deg, #2833d6, #e24444);
      background-size: 400% 400%;

      -webkit-animation: ${GradientAnimation} 18s ease infinite;
      -moz-animation: ${GradientAnimation} 18s ease infinite;
      animation: ${GradientAnimation} 18s ease infinite;

    `

    return (
        <Overview>
            <LeftOverview/>
            <RightOverview/>
        </Overview>
    );
}

export default Overview;