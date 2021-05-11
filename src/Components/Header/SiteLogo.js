import React from 'react';
import styled from 'styled-components';

function SiteLogo() {

    const logoText = "JAKUB RADZIK";

    const HeaderLogo = styled.h1`
      font-family: 'Black Ops One', cursive;
      color: white;
      font-size: 2em;
      margin: 10px;
    `;

    return(
        <HeaderLogo id="logo">
            {`</${logoText}>`}
        </HeaderLogo>
    )
}

export default SiteLogo;