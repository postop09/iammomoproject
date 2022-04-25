import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import ModalNewQ from '../Modal/ModalNewQ';
import axios from 'axios';

export default function Profile({userId, url}) {
  const [newQ, setNewQ] = useState(false);
  const [profile, setProfile] = useState();
  const [email, setEmail] = useState();
  const openModal = () => {
    setNewQ(true);
  }
  // 계정 호출
  const fetchGETuser = async() => {
    const res = await axios.get(`${url}/user/${userId}`);
    console.log(res);
    setProfile(res.data);
    setEmail(res.data.email)
  }
  useEffect(() => {
    fetchGETuser();
  }, [])

  // 계정 생성
  // const fetchPOSTuser = async() => {
  //   const res = await axios.post(`${url}/user`, {
  //     email: 'postop09@naver.com',
  //     password: '1234',
  //     username: '조윤식'
  //   });
  //   console.log(res);
  // }

  // 회원가입/로그인 테스트
  // const fetchTEST = async() => {
  //   const res = await axios.post(`${url}`);
  //   console.log(res);
  // }
  // const fetchTESTlogin = async() => {
  //   const res = await axios.post(`${url}`, {
  //     username: 'haha',
  //     password: '1234'
  //   });
  //   console.log(res);
  // }
  return (
    <SecProfile>
      <WrapProfile>
        {/* <ImgProfile></ImgProfile> */}
        <WrapTxt>
          <TxtTitle>모모 <TxtHide>프로필</TxtHide></TxtTitle>
          <TxtEmail>{email}</TxtEmail>
          <ListBtn>
            <li>
              <BtnQuetion type='button' onClick={openModal}>질문 만들기</BtnQuetion>
            </li>
          </ListBtn>
        </WrapTxt>
      </WrapProfile>
      {newQ ?
        <ModalNewQ setNewQ={setNewQ}/>
        : ''
      }
    </SecProfile>
  )
}

const SecProfile = styled.section`
  padding: 10vh 20px;
  font-family: ${theme.font.gothic_font};
`
const WrapProfile = styled.div`
  display: flex;
`
// const ImgProfile = styled.div`
//   box-shadow: 0px 2px 5px 1px #00000050;
//   border-radius: 7px;
//   width: 100px;
//   height: 100px;
//   background-image: linear-gradient(217deg, #a18cd1 0%, #fbc2eb 100%);
// `
const WrapTxt = styled.div`
  height: 100%;
  padding: 10px 10px 0;
`
const TxtTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
`
const TxtHide = styled.span`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`
const TxtEmail = styled.small`
  color: #37352f;
`
const ListBtn = styled.ul`
  display: flex;
  list-style: none;
`
const BtnQuetion =styled.button`
  box-shadow: 0px 2px 3px #00000050;
  border-radius: 3px;
  margin: 10px 5px 0 0;
  padding: 5px;
  font-family: ${theme.font.gothic_font};
  font-size: .9rem;
  background-color: ${theme.color.mellow};
`