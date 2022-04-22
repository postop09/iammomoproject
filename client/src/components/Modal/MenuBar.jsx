import { useNavigate } from "react-router";
import styled from "styled-components";
import theme from "../../theme";

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

  return (
    <Wrapper>
      <HeadSection>
        <button type="button" onClick={registerHandler}>회원가입</button>
        <button type="button" onClick={loginHandler}>로그인</button>
      </HeadSection>
      <BodySection>
        <button type="button" onClick={() => {navigate('/');modalHandler();}}>MOMO</button>
        <button type="button" onClick={() => {navigate('/beamomo');modalHandler();}}>MOMO 되기</button>
        <button type="button" onClick={() => {navigate('/')}}>MOMO 규칙</button>
        <button type="button" onClick={() => {navigate('/mymomo');modalHandler();}}>My MOMO</button>
        <button type="button" onClick={() => {navigate('/')}}>My Question</button>
        <button type="button" onClick={() => {navigate('/momoshare');modalHandler();}}>MOMO Library</button>
        <button type="button" onClick={() => {navigate('/')}}>MOMO 알람</button>
      </BodySection>
      <FooterSection>
        <button type="button" onClick={() => {navigate('/')}}>About Us</button>
        <button type="button" onClick={() => {navigate('/')}}>Contact Us</button>
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
  margin: 1rem 0.5rem;
  padding-bottom: 2rem;
  > button {
    font-size: .9rem;
    text-decoration: underline;
    font-family: ${theme.font.basic_font};
  }
`;

const BodySection = styled.section`
  text-align: center;
  padding-bottom: 13rem;
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
