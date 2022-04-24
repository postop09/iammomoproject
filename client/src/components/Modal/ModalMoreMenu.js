import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import theme from '../../theme'

export default function ModalMoreMenu({setModify, setModal, pickedPostId, url}) {
  const navigate = useNavigate();

  const fetchDELETEpost = async() => {
    const res = await axios.delete(`${url}/post/${pickedPostId}`);
    console.log(res);
  }
  const postModify = () => {
    setModify(true);
    setModal((prev) => !prev);
  }
  const postDelete = () => {
    const answer = window.confirm('정말 삭제할까요?');
    if (answer) {
      fetchDELETEpost();
      setModal((prev) => !prev);
      navigate('/mymomo');
    }
  }

  return (
    <SecModal>
      <TxtHide>메뉴 선택 모달창</TxtHide>
      <ListBtn>
        <li>
          <BtnModify type='button' onClick={postModify}>
            수정
          </BtnModify>
        </li>
        <li>
          <BtnDelete type='button' onClick={postDelete}>
            삭제
          </BtnDelete>
        </li>
      </ListBtn>
    </SecModal>
  )
}

const TxtHide = styled.h4`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`
const SecModal = styled.article`
  position: absolute;
  bottom: 65px;
  right: 10px;
  box-shadow: 1px 2px 4px 1px #00000050;
  border-radius: 10px;
  padding: 4px;
  background-color: ${theme.color.camel};
`
const ListBtn = styled.ul`
  border-radius: 10px;
  list-style: none;
`
const BtnModify = styled.button`
  border-radius: 7px;
  width: 100px;
  margin-bottom: 5px;
  padding: 10px 10px;
  font-family: ${theme.font.gothic_font};
  font-size: 1rem;
  background-color: ${theme.color.mellow};

`
const BtnDelete = styled.button`
  border-radius: 7px;
  width: 100px;
  padding: 10px 10px;
  font-family: ${theme.font.gothic_font};
  font-size: 1rem;
  background-color: ${theme.color.mellow};
`