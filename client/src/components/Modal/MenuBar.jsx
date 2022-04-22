import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
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
        <div>
          <Linkto to="/info" state={{ label: "bemomo" }}>
            MOMO 되기
          </Linkto>
        </div>
        <div>
          <Linkto to="/info" state={{ label: "rules" }}>
            MOMO 규칙
          </Linkto>
        </div>

        <div>My MOMO</div>
        <div>My Question</div>
        <div>MOMO 알람</div>
      </BodySection>
      <FooterSection>
        <div>
          {" "}
          <Linkto to="/info" state={{ label: "aboutus" }}>
            About Us
          </Linkto>
        </div>

        <div>
          {" "}
          <Linkto to="/info" state={{ label: "contactus" }}>
            Contact Us
          </Linkto>
        </div>
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
    > div:first-child {
      margin-right: 1rem;
    }
  }
`;

const BodySection = styled.section`
  text-align: center;
  font-size: 1.3rem;
  padding-bottom: 20rem;
  > div {
    padding-bottom: 1rem;
  }
`;

const FooterSection = styled.section`
  text-align: center;
  font-size: 1.3rem;
  > div {
    padding-bottom: 1rem;
  }
`;

const Linkto = styled(Link)`
  text-decoration: none;
  font-size: 1.3rem;
  color: black;
`;
