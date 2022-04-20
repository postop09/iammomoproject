import React from 'react';
import styled from 'styled-components';
import ShareDate from '../../components/SharePage/ShareDate';
import ShareQuestion from '../../components/SharePage/ShareQuestion';
import theme from '../../theme';

export default function SharePage() {
  return (
    <WrapMain>
      <ShareDate />
      <ShareQuestion />
    </WrapMain>
  )
}

const WrapMain = styled.main`
  min-height: 95vh;
  background-color: ${theme.color.pantone};
`