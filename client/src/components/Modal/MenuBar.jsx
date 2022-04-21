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
        <div onClick={registerHandler}>회원가입</div>
        <div onClick={loginHandler}>로그인</div>
      </HeadSection>
      <BodySection>
        <div>MOMO 되기</div>
        <div>MOMO 규칙</div>
        <div>My MOMO</div>
        <div>My Question</div>
        <div>MOMO 알람</div>
      </BodySection>
      <FooterSection>
        <div>About Us</div>
        <div>Contact Us</div>
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
  font-family: ${theme.font.basic_font};
  z-index: 2;
`;

const HeadSection = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0.5rem;
  padding-bottom: 2rem;
  > div {
    text-decoration: underline;
  }
`;

const BodySection = styled.section`
  text-align: center;
  font-size: 1.1rem;
  padding-bottom: 21rem;
  > div {
    padding-bottom: 1rem;
  }
`;

const FooterSection = styled.section`
  text-align: center;
  font-size: 1.1rem;
  > div {
    padding-bottom: 1rem;
  }
`;
