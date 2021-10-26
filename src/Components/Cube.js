import React from 'react';
import styled from "styled-components";

function Cube() {

    const Scene = styled.div`
      width: 200px;
      height: 200px;
      border: 1px solid #CCC;
      margin: 80px;
      perspective: 400px;
    `

    const Cube = styled.div`
      width: 200px;
      height: 200px;
      position: relative;
      transform-style: preserve-3d;
    `

    const w = 400;
    const hw = w/2;
    const width = w+"px";
    const halfWidth = hw+"px";

    const CubeFace = styled.div`
      position: absolute;
      width: ${width};
      height: 200px;
      border: 2px solid black;
      line-height: 200px;
      font-size: 40px;
      font-weight: bold;
      color: white;
      text-align: center;
    `;

    const Front = styled(CubeFace)`
      background: hsla(  0, 100%, 50%, 0.7);
      transform: rotateY(  0deg) translateZ(100px);
    `
    // const Back = styled(CubeFace)`
    //   background: hsla(120, 100%, 50%, 0.7);
    //   transform: rotateY(180deg) translateZ(100px);
    // `
    // const Left = styled(CubeFace)`
    //   background: hsla(180, 100%, 50%, 0.7);
    //   transform: rotateY(-90deg) translateZ(100px);
    //   width: ${halfWidth};
    // `
    const Right = styled(CubeFace)`
      background: hsla( 60, 100%, 50%, 0.7);
      transform: rotateY( 90deg) translateZ(300px);
      width: ${halfWidth};
    `
    const Top = styled(CubeFace)`
      background: hsla(240, 100%, 50%, 0.7);
      transform: rotateX( 90deg) translateZ(100px);
    `
    // const Bottom = styled(CubeFace)`
    //   background: hsla(300, 100%, 50%, 0.7);
    //   transform: rotateX(-90deg) translateZ(100px);
    // `

    return (
        <Scene>
            <Cube>
                <Front>front</Front>
                {/*<Back>back</Back>*/}
                <Right>right</Right>
                {/*<Left>left</Left>*/}
                <Top>top</Top>
                {/*<Bottom>bottom</Bottom>*/}
            </Cube>
        </Scene>
    );
}

export default Cube;