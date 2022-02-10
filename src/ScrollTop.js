import React from 'react';
import styled from 'styled-components';

function ScrollTop() {
  const Div = styled.div`
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: red;
  `;

  return <Div>TO UP</Div>;
}

export default ScrollTop;
