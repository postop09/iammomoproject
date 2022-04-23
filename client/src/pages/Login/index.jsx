import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router";
import useSwr from "swr";
import { useCallback, useState } from "react";
import axios from "axios";
import fetcher from "../../utils/fetcher";

const Login = () => {
  const { data, error, revalidate, mutate } = useSwr(
    "/api/users/auth",
    fetcher
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const backHandler = () => {
    navigate("/");
  };

  const onChangeEmailHandler = (event) => {
    const emailCurrent = event.target.value;
    setEmail(emailCurrent);
  };

  const onChangePasswordHandler = (event) => {
    const passwordCurrent = event.target.value;
    setPassword(passwordCurrent);
  };

  // const onLogin = useCallback(() => {
  //   axios
  //     .post(
  //       "/api/users/login",
  //       { email: email, password: password },
  //       { withCredentials: true }
  //     )
  //     .then((response) => mutate())
  //     .catch((err) => console.log(err));
  // });

  const onLogin = useCallback(() => {
    axios
      .post(
        "/auth/login",
        { username: email, password: password },
        { withCredentials: true }
      )
      .then((response) => mutate())
      .catch((err) => console.log(err));
  });

  if (data?.isAuth) {
    console.log(data);
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      <HeaderWrapper>
        <button onClick={backHandler}>
          <Icon icon={faArrowLeft} />
        </button>
      </HeaderWrapper>
      <Wrapper>
        <form>
          <InputWrapper>
            <label>이메일 주소</label>
            <input
              name="email"
              type="email"
              placeholder="ID@iammomo.com"
              onChange={onChangeEmailHandler}
              value={email}
            />
          </InputWrapper>
          <InputWrapper>
            <label>비밀번호</label>
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={onChangePasswordHandler}
              value={password}
            />
          </InputWrapper>
        </form>
        <RegisterButton onClick={onLogin}>로그인</RegisterButton>
      </Wrapper>
    </div>
  );
};

export default Login;

const Wrapper = styled.div`
  padding: 1rem;
  padding-top: 5rem;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
  > div {
    font-size: 1.2rem;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  margin-right: 2rem;
`;

const InputWrapper = styled.div`
  margin-bottom: 2rem;
  height: 5rem;
  > label {
    display: block;
    margin-bottom: 0.5rem;
  }
  > input {
    width: 100%;
    height: 2rem;

    border: 1px solid lightgray;
  }
  > div {
    margin-top: 0.5rem;
    /* color: ${(props) => (props.show === "true" ? "green" : "red")}; */
  }
`;

const RegisterButton = styled.button`
  width: 100%;
  border: 1px solid lightgray;
  height: 3rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.theme.color.camel};
`;
