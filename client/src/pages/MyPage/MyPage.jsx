import React from 'react'
import styled from 'styled-components'
import MyPost from '../../components/MyPage/MyPost'
import Profile from '../../components/MyPage/Profile'
import theme from '../../theme'

export default function MyPage() {
  return (
    <WrapMain>
      <Profile />
      <MyPost />
    </WrapMain>
  )
}

const WrapMain = styled.main`
  min-height: 100vh;
  background-color: ${theme.color.pantone};
`