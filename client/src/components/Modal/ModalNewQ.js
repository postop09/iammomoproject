import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import theme from '../../theme'

export default function ModalNewQ({setNewQ}) {
  const [inpTopic, setInpTopic] = useState('');
  const url = 'http://52.79.45.37:8080/api';
  const fetchPOSTquestion = async() => {
    const res = await axios.post(`${url}/topic`, {
      title: inpTopic
    })
    console.log(res);
  }
  const BtnSubmit = () => {
    const answer = window.confirm('등록할까요?')
    if (answer) {
      fetchPOSTquestion();
      setNewQ(false);
    }
  }
  const ModalCancel = (e) => {
    if (e.target.nodeName === 'ARTICLE' || e.target.name === 'cancel') {
      const answer = window.confirm('취소할까요?')
      if (answer) {
        setNewQ(false);
      }
    }
  }
  
  return (
    <SecModal onClick={ModalCancel}>
      <WrapModal>
        <InpQuestion type='text' value={inpTopic} onChange={(e) => {setInpTopic(e.target.value)}} />
        <ListBtn>
          <li>
            <Btn type='button' name='submit' onClick={BtnSubmit}>
              등록
            </Btn>
          </li>
          <li>
            <Btn type='button' name='cancel'>
              취소
            </Btn>
          </li>
        </ListBtn>
      </WrapModal>
    </SecModal>
  )
}

const SecModal = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000050;
`
const WrapModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 2px #00000050;
  border-radius: 5px;
  padding: 10px 5px;
  background-color: ${theme.color.mellow};
  z-index: 10;
`
const InpQuestion = styled.input`
  border: none;
  width: 85vw;
  padding: 3px 5px;
  font-family: ${theme.font.basic_font};
  font-size: 1rem;
`
const ListBtn = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin-top: 5px;
`
const Btn = styled.button`
  box-shadow: 0px 2px 3px #00000050;
  border-radius: 3px;
  padding: 2px 8px;
  font-family: ${theme.font.gothic_font};
  font-size: .9rem;
  background-color: ${theme.color.camel};
  cursor: pointer;
`