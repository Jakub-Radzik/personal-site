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
    `

    const Divb = styled.div`
      width: 100%;
      height: 100vh;
      background: deepskyblue;
    `


    return (
      <div className="App">
          <Overview/>
          <Header/>
          <Diva/>
          <Divb/>
      </div>
  );
}



export default App;
