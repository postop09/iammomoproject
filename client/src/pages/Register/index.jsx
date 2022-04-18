import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <button>
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
              />
            </InputWrapper>
            <InputWrapper>
              <label>이메일 주소</label>
              <input name="email" type="email" placeholder="ID@iammomo.com" />
            </InputWrapper>
            <InputWrapper>
              <label>비밀번호</label>
              <input name="password" type="password" placeholder="비밀번호" />
            </InputWrapper>
            <InputWrapper>
              <label>비밀번호 확인</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="비밀번호 확인"
              />
            </InputWrapper>
            <TermsWrapper>
              <label>약관 동의</label>
              <AgreementsWrapper>
                <AgreementsAll>
                  <input type="checkbox" />
                  <label>전체 약관 동의</label>
                </AgreementsAll>
                <Agreements>
                  <div>
                    <input type="checkbox" />
                    <label>회원가입 및 운영약관 동의(필수)</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>개인정보 활용동의(필수) </label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>마케팅 동의</label>
                  </div>
                </Agreements>
              </AgreementsWrapper>
            </TermsWrapper>
          </form>
        </FormWrapper>
        <OauthButton>회원가입</OauthButton>
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
  > label {
    display: block;
    margin-bottom: 0.5rem;
  }
  > input {
    width: 100%;
    height: 2rem;
    margin-bottom: 2rem;
    border: 1px solid lightgray;
    /* padding-left: 0.5rem; */
    /* margin-right: -0.5rem; */
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
