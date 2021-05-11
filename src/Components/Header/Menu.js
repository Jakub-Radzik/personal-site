import React from 'react';
import styled from 'styled-components';

function Menu(){

    const Navigation = styled.nav`
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;
    `;

    const MenuItem = styled.div`
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 130px;
      border-bottom: 5px solid green;
      transition-duration: 0.5s;
      &:hover{
        border-bottom-color: yellow;
      }
    `;


    return(
        <Navigation id="menu">
            <MenuItem id="menu-item">O mnie</MenuItem>
            <MenuItem id="menu-item">Technologie</MenuItem>
            <MenuItem id="menu-item">Projekty</MenuItem>
            <MenuItem id="menu-item">Kontakt</MenuItem>
        </Navigation>
    )
}

export default Menu;