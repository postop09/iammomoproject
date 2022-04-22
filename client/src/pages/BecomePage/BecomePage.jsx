import React from 'react'
import styled from 'styled-components'
import BecomeTxt from '../../components/BecomePage/BecomeTxt';
import theme from '../../theme';

export default function BecomePage() {
  return (
    <WrapMain>
      <BecomeTxt />
    </WrapMain>
  )
}

const WrapMain = styled.main`
  min-height: 100vh;
  background-color: ${theme.color.pantone};
`