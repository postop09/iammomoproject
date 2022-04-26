// import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import theme from "../../theme";
// import useSWR from "swr";
// import fetcher from "../../utils/fetcher";
// import { Link } from "react-router-dom";

const MenuBar = (props) => {
  const navigate = useNavigate();

  const registerHandler = () => {
    navigate("/register");
  };

  const loginHandler = () => {
    navigate("/login");
  };

  const modalHandler = () => {
    props.setModal(!props.modal);
  };
  const modalclose = (e) => {
    if (e.target.nodeName === 'ARTICLE') {
      props.setModal(false);
    }
  };

  const onLogout = useCallback(() => {
    // axios
    //   .post(
    //     "/api/users/logout",
    //     { id: window.localStorage.getItem("data").id },
    //     { withCredentials: true }
    //   )
    //   .then(() => window.localStorage.clear());
    window.localStorage.clear();
    window.location.reload();
    console.log(1);
  });

  return (
    <OverWrap onClick={modalclose}>
      <Wrapper>
        <HeadSection>
          {window.localStorage.getItem("data") || window.localStorage.getItem("apiData") ? (
            <div>
              <button onClick={onLogout}>로그아웃</button>
              <button>설정</button>
            </div>
          ) : (
            <div>
              <div onClick={registerHandler}>회원가입</div>
              <div onClick={loginHandler}>로그인</div>
            </div>
          )}
        </HeadSection>
        <BodySection>
          <button type="button" onClick={() => {navigate('/beamomo');modalHandler();}}>MOMO 되기</button>
          <button type="button" onClick={() => {navigate('/mymomo');modalHandler();}}>나의 MOMO</button>
          <button type="button" onClick={() => {navigate('/');modalHandler();}}>나만의 질문</button>
          <button type="button" onClick={() => {navigate('/momoshare');modalHandler();}}>MOMO 글모음</button>
        </BodySection>
        <FooterSection>
          <button
            type="button"
            onClick={() => {
              navigate("/about");
              modalHandler();
            }}
          >
            About Us
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/contact");
              modalHandler();
            }}
          >
            Contact Us
          </button>
        </FooterSection>
      </Wrapper>
    </OverWrap>
  );
};
export default MenuBar;

const OverWrap = styled.article`
  position: fixed;
  top: 42px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000050;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 154px;
  height: 75vh;
  position: fixed;
  background-color: white;
  border: 2px solid black;
  border-left: none;
  z-index: 10;
`;

const HeadSection = styled.section`
  display: flex;
  justify-content: space-around;
  > div {
    display: flex;
    justify-content: space-around;
    text-decoration: underline;
    margin: 1rem 0.5rem;
    padding-bottom: 2rem;
    font-size: 0.9rem;
    > div:first-child {
      margin-right: 1rem;
    }
  }
`;
const BodySection = styled.section`
  margin-bottom: auto;
  text-align: center;
  > button {
    padding-bottom: 1rem;
    font-size: 1rem;
    font-family: ${theme.font.basic_font};
  }
`;

const FooterSection = styled.section`
  text-align: center;
  > button {
    padding-bottom: 1rem;
    font-size: 1rem;
    font-family: ${theme.font.basic_font};
  }
`;