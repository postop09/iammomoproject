import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalMoreMenu from '../../components/Modal/ModalMoreMenu';
import testData from '../../database/testData.json';
import theme from '../../theme';

export default function DetailPage() {
  const pickedPostId = window.location.pathname.split('/').pop();
  const [modal, setModal] = useState(false);
  const [modify, setModify] = useState(false);
  const [txtArea, setTxtArea] = useState('');
  const TxtModify = (e) => {
    setTxtArea(e.target.value);
  };
  const btnSaveTxt = () => {
    const answer = window.confirm('저장할까요?')
    if (answer) {
      setModify(false);
      // axios.PUT {contents: txtArea}
    }
  }
  const btnCancel = () => {
    setModify(false);
  }
  useEffect(() => {
    testData.map((data) => {
      if (data.postId === +pickedPostId) {
        setTxtArea(data.contents);
      }
    })
  }, []);
  

  return (
    testData.map((data) => {
      if (data.postId === +pickedPostId) {
        return (
          <div key={data.postId}>
            <Header>
              <TxtHide>내 글 상세보기/수정 페이지</TxtHide>
              <WrapHeader>
                <BtnMenu onClick={() => {window.history.back()}}>
                  <ImgMenu
                    src={require("../../assets/img/icon-arrow-left.png")}
                    alt="뒤로 가기"
                  />
                </BtnMenu>
              </WrapHeader>
            </Header>
            <SecMain>
              <TxtHideH2>내 글 자세히보기</TxtHideH2>
              <SecTitle>
                <Title>{data.topic}</Title>
              </SecTitle>
              <SecContents>
                <TxtHideH3>글 내용</TxtHideH3>
                {modify ?
                  <ContentsModify value={txtArea} onChange={TxtModify} autoFocus></ContentsModify>
                  : <Contents value={txtArea} readOnly></Contents>
                }
              </SecContents>
              <BtnMore type='button' onClick={() => {setModal((prev) => !prev)}}>
                +<TxtHideSpan> 메뉴 더보기</TxtHideSpan>
              </BtnMore>
              {modal ? <ModalMoreMenu setModify={setModify} setModal={setModal} /> : ''}
              {modify ?
                <WrapBtn>
                  <BtnSave type='button' onClick={btnSaveTxt}>저장</BtnSave>
                  <BtnCancel type='button' onClick={btnCancel}>취소</BtnCancel>
                </WrapBtn>
                : ''
              }
              
            </SecMain>
          </div>
        )
      }
    })
  )
}

const TxtHide = styled.h1`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`
const TxtHideH2 = styled.h2`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`
const TxtHideH3 = styled.h3`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`
const TxtHideSpan = styled.h3`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`
const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: #fff;
  z-index: 100;
`
const WrapHeader = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  height: 5vh;
`;
const BtnMenu = styled.button`
  height: 90%;
  cursor: pointer;
`;
const ImgMenu = styled.img`
  height: 70%;
`;
const SecMain = styled.main`
  height: 100vh;
  background-color: ${theme.color.mellow};
  overflow: hidden;
`
const SecTitle = styled.section`
  height: 16vh;
  padding: 8vh 10px 3vh;
  font-family: ${theme.font.gothic_font};
`
const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
`
const SecContents = styled.section`
  /* padding: 1vh 10px; */
`
const Contents = styled.textarea`
  border: none;
  border-top: 1px solid ${theme.color.camel};
  width: 100%;
  height: 84vh;
  padding: 10px;
  font-family: ${theme.font.basic_font};
  font-size: 1rem;
  background-color: ${theme.color.pantone};
  resize: none;
`
const ContentsModify = styled.textarea`
  box-shadow: 0px 0px 7px 2px #00000050;
  border: none;
  border: 3px solid ${theme.color.camel};
  width: 100%;
  height: 84vh;
  padding: 10px 10px 60px;
  font-family: ${theme.font.basic_font};
  font-size: 1rem;
  background-color: ${theme.color.pantone};
  resize: none;
`
const BtnMore = styled.button`
  position: absolute;
  right: 10px;
  bottom: 15px;
  box-shadow: 1px 2px 5px 1px #00000050;
  border-radius: 100%;
  padding: 2px 10px;
  font-size: 2rem;
  font-weight: 700;
  background-color: ${theme.color.camel};
  opacity: .8;
`
const WrapBtn = styled.div`
  position: absolute;
  left: 15px;
  bottom: 20px;
`
const BtnSave = styled.button`
  box-shadow: 1px 2px 5px 1px #00000050;
  border-radius: 20px;
  padding: 4px 25px;
  font-size: 1rem;
  font-weight: 700;
  background-color: ${theme.color.camel};
  opacity: .9;
`
const BtnCancel = styled.button`
  box-shadow: 1px 2px 5px 1px #00000050;
  border-radius: 20px;
  margin-left: 15px;
  padding: 4px 25px;
  font-size: 1rem;
  font-weight: 700;
  background-color: ${theme.color.camel};
  opacity: .9;
`