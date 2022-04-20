import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
      <form>
        <InputWrapper>
          <label>이메일 주소</label>
          <input name="email" type="email" placeholder="ID@iammomo.com" />
        </InputWrapper>
        <InputWrapper>
          <label>비밀번호</label>
          <input name="password" type="password" placeholder="비밀번호" />
        </InputWrapper>
      </form>
      <RegisterButton>로그인</RegisterButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  padding: 1rem;
  padding-top: 5rem;
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
