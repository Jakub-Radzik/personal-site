import React, { useEffect } from 'react';
import styled from 'styled-components';
import $ from 'jquery';

function Menu() {
  const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    @media (max-width: 1000px) {
      width: 100%;
    }
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
    &:hover {
      border-bottom-color: yellow;
    }
    @media (max-width: 1000px) {
      width: 25%;
    }
  `;

  const A = styled.a``;

  const scroller = () => {
    $("a[href^='#']").click(function (e) {
      e.preventDefault();

      let position = $($(this).attr('href')).offset().top;

      $('body, html').animate(
        {
          scrollTop: position,
        } /* speed */
      );
    });
  };

  return (
    <Navigation id="menu">
      <A href={'#overview'} onClick={() => scroller()}>
        <MenuItem id="menu-item">O mnie</MenuItem>
      </A>
      <A href={'#projects'} onClick={() => scroller()}>
        <MenuItem id="menu-item">Projekty</MenuItem>
      </A>
      <A href={'#id2'}>
        <MenuItem id="menu-item">Umiejętności</MenuItem>
      </A>
      <A href={'#overview'}>
        <MenuItem id="menu-item">Kontakt</MenuItem>
      </A>
    </Navigation>
  );
}

export default Menu;
