import './App.css';
import Header from "./Components/Header/Header";
import React,{useEffect, useState, useRef} from "react";
import Overview from "./Components/Overview/Overview";
import styled from "styled-components";

function App() {

    const Diva = styled.div`
      width: 100%;
      height: 100vh;
      background: yellow;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3em;
      text-align: center;
    `

    const Divb = styled.div`
      width: 100%;
      height: 100vh;
      background: deepskyblue;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3em;
      text-align: center;
    `


    return (
      <div className="App">
          <Overview/>
          <Header/>
          <Diva>Here you will find a lot of great content soon</Diva>
          <Divb>Here you will find a lot of great content soon</Divb>
      </div>
  );
}



export default App;
