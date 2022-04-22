import React from 'react'
import styled from 'styled-components'
import Profile from '../../components/MyPage/Profile'
import theme from '../../theme'

export default function MyPage() {
  return (
    <WrapMain>
      <Profile />
    </WrapMain>
  )
}

const WrapMain = styled.main`
  min-height: 100vh;
  background-color: ${theme.color.pantone};
`