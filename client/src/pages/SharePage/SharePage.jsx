import React, { useState } from 'react';
import styled from 'styled-components';
import ModalOthersCard from '../../components/Modal/ModalOthersCard';
import ShareDate from '../../components/SharePage/ShareDate';
import ShareQuestion from '../../components/SharePage/ShareQuestion';
import theme from '../../theme';

export default function SharePage() {
  const [isClicked, setIsClicked] = useState(false);
  const [cardId, setCardId] = useState();

  return (
    <WrapMain>
      <ShareDate setIsClicked={setIsClicked} setCardId={setCardId} />
      <ShareQuestion setIsClicked={setIsClicked} setCardId={setCardId} />
      {isClicked ? <ModalOthersCard setIsClicked={setIsClicked} cardId={cardId} /> : ''}
      {/* <ModalOthersCard /> */}
    </WrapMain>
  )
}

const WrapMain = styled.main`
  min-height: 95vh;
  background-color: ${theme.color.pantone};
`