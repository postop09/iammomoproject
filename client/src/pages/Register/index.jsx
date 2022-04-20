import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const [checkbox, setCheckbox] = useState([]);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const onChangeUserNameHandler = (event) => {
    const nameCurrent = event.target.value;
    setUserName(nameCurrent);
    if (nameCurrent.length < 2 || nameCurrent.length > 5) {
      setNameError("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameError("올바른 이름 형식입니다 :)");
      setIsName(true);
    }
  };

  const onChangeEmailHandler = (event) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = event.target.value;
    setEmail(emailCurrent);
    if (!emailRegex.test(emailCurrent)) {
      setEmailError("이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ");
      setIsEmail(false);
    } else {
      setEmailError("올바른 이메일 형식이에요 : )");
      setIsEmail(true);
    }
  };

  const onChangePasswordHandler = (event) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = event.target.value;
    setPassword(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordError(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordError("안전한 비밀번호에요 : )");
      setIsPassword(true);
    }
  };

  const onChangeConfirmPasswordHandler = (event) => {
    const passwordConfirmCurrent = event.target.value;
    setConfirmPassword(passwordConfirmCurrent);
    if (password === passwordConfirmCurrent) {
      setConfirmPasswordError("비밀번호를 똑같이 입력했어요 : )");
      setIsPasswordConfirm(true);
    } else {
      setConfirmPasswordError("비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ");
      setIsPasswordConfirm(false);
    }
  };

  const checkboxHandler = (checked, id) => {
    if (checked) {
      setCheckbox([...checkbox, id]);
      if (id === "check1") setCheck1(true);
      else if (id === "check2") setCheck2(true);
    } else {
      setCheckbox(checkbox.filter((check) => check !== id));
      if (id === "check1") setCheck1(false);
      else if (id === "check2") setCheck2(false);
    }
  };

  const allSelectorHandler = (checked) => {
    if (checked) {
      setCheckbox(["check1", "check2", "check3"]);
      setCheck1(true);
      setCheck2(true);
    } else {
      setCheckbox([]);
      setCheck1(false);
      setCheck2(false);
    }
  };

  const backHandler = () => {
    navigate("/");
  };

  const submitHanler = async () => {
    await axios
      .post("/api/topic", {
        title: "postData",
      })
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <button onClick={backHandler}>
          <Icon icon={faArrowLeft} />
        </button>
        <div>회원가입</div>
      </HeaderWrapper>
      <BodyWrapper>
        <OauthRegister>
          <OauthButton>카카오톡으로 회원가입</OauthButton>
          <OauthButton>구글로 회원가입</OauthButton>
          <OauthBoundary>또는</OauthBoundary>
        </OauthRegister>
        <FormWrapper>
          <form>
            <InputWrapper>
              <label>이름</label>
              <input
                name="name"
                type="text"
                placeholder="이름을 입력해주세요."
                onChange={onChangeUserNameHandler}
                // value={userName}
              />
              {userName.length > 0 && (
                <div className={isName ? "green" : "red"}>{nameError}</div>
              )}
            </InputWrapper>
            <InputWrapper>
              <label>이메일 주소</label>
              <input
                name="email"
                type="email"
                placeholder="ID@iammomo.com"
                onChange={onChangeEmailHandler}
                value={email}
              />
              {email.length > 0 && (
                <div className={isEmail ? "green" : "red"}>{emailError}</div>
              )}
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
              {password.length > 0 && (
                <div className={isPassword ? "green" : "red"}>
                  {passwordError}
                </div>
              )}
            </InputWrapper>
            <InputWrapper>
              <label>비밀번호 확인</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="비밀번호 확인"
                onChange={onChangeConfirmPasswordHandler}
                value={confirmPassword}
              />
              {confirmPassword.length > 0 && (
                <div className={isPasswordConfirm ? "green" : "red"}>
                  {confirmPasswordError}
                </div>
              )}
            </InputWrapper>
            <TermsWrapper>
              <label>약관 동의</label>
              <AgreementsWrapper>
                <AgreementsAll>
                  <input
                    type="checkbox"
                    checked={checkbox.length === 3 ? true : false}
                    onChange={(e) =>
                      allSelectorHandler(e.currentTarget.checked)
                    }
                  />
                  <label>전체 약관 동의</label>
                </AgreementsAll>
                <Agreements>
                  <div>
                    <input
                      type="checkbox"
                      id="check1"
                      checked={checkbox.includes("check1")}
                      onChange={(e) =>
                        checkboxHandler(e.currentTarget.checked, "check1")
                      }
                    />
                    <label>회원가입 및 운영약관 동의(필수)</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="check2"
                      checked={checkbox.includes("check2")}
                      onChange={(e) =>
                        checkboxHandler(e.currentTarget.checked, "check2")
                      }
                    />
                    <label>개인정보 활용동의(필수) </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="check3"
                      checked={checkbox.includes("check3")}
                      onChange={(e) =>
                        checkboxHandler(e.currentTarget.checked, "check3")
                      }
                    />
                    <label>마케팅 동의</label>
                  </div>
                </Agreements>
              </AgreementsWrapper>
            </TermsWrapper>
          </form>
        </FormWrapper>
        <RegisterButton
          disabled={
            !(
              isName &&
              isEmail &&
              isPassword &&
              isPasswordConfirm &&
              check1 &&
              check2
            )
          }
          onClick={submitHanler}
        >
          회원가입
        </RegisterButton>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.div``;

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

const BodyWrapper = styled.div`
  padding: 1rem;
`;

const OauthRegister = styled.div``;

const OauthButton = styled.button`
  width: 100%;
  border: 1px solid lightgray;
  height: 2rem;
  margin-bottom: 0.5rem;
`;

const OauthBoundary = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 12px;
  margin: 8px 0px;
  ::before {
    content: "";
    flex-grow: 1;
    background: lightgray;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin-right: 1rem;
  }
  ::after {
    content: "";
    flex-grow: 1;
    background: lightgray;
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    margin-left: 1rem;
  }
`;

const FormWrapper = styled.div``;

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
    font-size: 0.8rem;
    &.red {
      color: red;
    }
    &.green {
      color: green;
    }
  }
`;

const TermsWrapper = styled.div`
  > label {
    display: block;
    margin-bottom: 0.5rem;
  }
  margin-bottom: 1rem;
`;

const AgreementsWrapper = styled.div``;
const AgreementsAll = styled.div`
  margin-bottom: 0.5rem;
  > input {
    margin-right: 0.5rem;
  }
`;

const Agreements = styled.div`
  border: solid 1px lightgray;
  padding-left: 0.5rem;
  padding-top: 1rem;
  > div {
    margin-bottom: 0.5rem;
    :last-child {
      margin-bottom: 1rem;
    }
    > input {
      margin-right: 0.5rem;
    }
  }
`;

const RegisterButton = styled.button`
  width: 100%;
  border: 1px solid lightgray;
  height: 3rem;
  margin-bottom: 0.5rem;
  background-color: ${(props) =>
    props.disabled ? "lightgray" : props.theme.color.camel};
`;
