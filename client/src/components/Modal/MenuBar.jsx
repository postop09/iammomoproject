import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import theme from "../../theme";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { Link } from "react-router-dom";

const MenuBar = (props) => {
  const navigate = useNavigate();

  const { data, mutate } = useSWR("/api/users/auth", fetcher);

  const registerHandler = () => {
    navigate("/register");
  };

  const loginHandler = () => {
    navigate("/login");
  };

  const modalHandler = () => {
    props.setModal(!props.modal);
  };

  const onLogout = useCallback(() => {
    axios
      .post("/api/users/logout", { id: data._id }, { withCredentials: true })
      .then(() => mutate(false, false));
  });

  return (
    <Wrapper>
      <HeadSection>
        {data?.isAuth ? (
          <div>
            <button onClick={onLogout}>로그아웃</button>
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
        <button type="button" onClick={() => {navigate('/about');modalHandler();}}>About Us</button>
        <button type="button" onClick={() => {navigate('/contact');modalHandler();}}>Contact Us</button>
      </FooterSection>
    </Wrapper>
  );
};

export default MenuBar;

const Backdrop = styled.div`
  width: 100vh;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0);
  z-index: 1;
`;

const Wrapper = styled.div`
  /* top: 5rem; */
  width: 40vw;
  height: 80vh;
  position: fixed;
  background-color: white;
  border: 2px solid black;
  border-left: none;
  z-index: 2;
`;

const HeadSection = styled.section`
  display: flex;
  justify-content: space-around;
  /* margin: 1rem 0.5rem;
  padding-bottom: 2rem; */
  > div {
    display: flex;
    justify-content: space-around;
    text-decoration: underline;
    margin: 1rem 0.5rem;
    padding-bottom: 2rem;
    font-size: .9rem;
    > div:first-child {
      margin-right: 1rem;
    }
  }
`;

const BodySection = styled.section`
  text-align: center;
  padding-bottom: 21rem;
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

const Linkto = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: black;
`;
