import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router";
import { useCallback, useState } from "react";
import axios from "axios";
// import useSwr from "swr";
// import fetcher from "../../utils/fetcher";

const Login = () => {
  // const { data, error, revalidate, mutate } = useSwr("/auth/signin", fetcher);
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
        "/auth/signin",
        { email: email, password: password },
        { withCredentials: true }
      )
      .then((response) => {
        // mutate();
        const accessToken = response.data.token;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        window.localStorage.setItem("data", JSON.stringify(response.data));
        console.log(response.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  });

  if (window.localStorage.getItem("data")) {
    return <Navigate replace to="/" />;
  }
  // api/user
  const fetchGETuser = async() => {
    const url = 'http://52.79.45.37:8080/api';
    const res = await axios.get(`${url}/user`);
    console.log(res);
    res.data.map((user) => {
      if (user.email === email) {
        localStorage.setItem('apiData', JSON.stringify(user));
        localStorage.setItem('userId', user.id);
      }
    })
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
        <RegisterButton onClick={() => {onLogin();fetchGETuser();}}>로그인</RegisterButton>
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
