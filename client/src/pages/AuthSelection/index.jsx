import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../../assets/authselection.jpeg";

const AuthSelection = () => {
  return (
    <Wrapper>
      <img src={background} />
      <HeaderWrapper>
        <div>I'm MOMO Project</div>
      </HeaderWrapper>
      <BodyWrapper>
        <KakaoButton>카카오톡으로 로그인</KakaoButton>
        <GoggleButton>구글로 로그인</GoggleButton>
        <div>
          <div>
            <StyledLink to="/login">이메일로 로그인</StyledLink>
          </div>
          <div>
            <StyledLink to="/register">이메일로 회원가입</StyledLink>
          </div>
        </div>
      </BodyWrapper>
    </Wrapper>
  );
};

export default AuthSelection;

const Wrapper = styled.div`
  > img {
    position: fixed;
    height: 100%;
    z-index: -1;
  }
  > div {
    height: 50vh;
    > div {
    }
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* text-align: center; */
  align-items: center;
  font-size: 2.5rem;
`;

const BodyWrapper = styled.div`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-top: 8rem;
  > div {
    display: flex;
    margin-top: 1rem;
    text-align: center;
    color: lightgray;
    > div {
      /* justify-content: center; */
      width: 50vw;
      :first-child {
        border-right: 1px solid lightgray;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  color: lightgray;
  text-decoration: none;
`;

const KakaoButton = styled.button`
  width: 100%;
  border: 1px solid lightgray;
  height: 2rem;
  margin-bottom: 0.5rem;
  background-color: yellow;
`;

const GoggleButton = styled.button`
  width: 100%;
  border: 1px solid lightgray;
  height: 2rem;
  margin-bottom: 0.5rem;
  background-color: white;
`;
