import React from 'react';
import styled from 'styled-components';

function Tag({ text, bgcolor, color }) {
  const Tag = styled.div`
    background: ${bgcolor};
    color: ${color};
    width: max-content;
    padding: 5px 10px;
    border-radius: 20px;
  `;

  return <Tag>{text}</Tag>;
}

export default Tag;
