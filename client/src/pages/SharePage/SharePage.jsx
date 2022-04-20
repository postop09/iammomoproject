import React, { useState } from 'react';
import styled from 'styled-components';
import OthersCard from '../../components/Modal/ModalOthersCard';
import ShareDate from '../../components/SharePage/ShareDate';
import ShareQuestion from '../../components/SharePage/ShareQuestion';
import theme from '../../theme';

export default function SharePage() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <WrapMain>
      <ShareDate />
      <ShareQuestion />
      <OthersCard />
    </WrapMain>
  )
}

const WrapMain = styled.main`
  min-height: 95vh;
  background-color: ${theme.color.pantone};
`