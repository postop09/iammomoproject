import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Contactus = () => {
  const form = useRef();
  const textareaRef = useRef();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAIL_ID
      )
      .then(
        (result) => {
          navigate("/");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onTyping = (event) => {
    const textCurrent = event.target.value;
    setText(textCurrent);
  };

  return (
    <Wrapper>
      <BackgroundWrapper>
        <Background>
          <TxtBack>M</TxtBack>
          <TxtBack>O</TxtBack>
          <TxtBack>M</TxtBack>
          <TxtBack>O</TxtBack>
        </Background>
      </BackgroundWrapper>
      <Piece>
        <PieceHeader>자주 묻는질문(FAQ)</PieceHeader>
        <FAQ>
          <div>1. 특정 사용자가 작성한 글을 골라서 볼 수는 없나요?</div>
          <div>
            모모 프로젝트는 다양한 사람의 일상을 공유함을 목적으로 하여, 현재
            특정 사용자의 글을 골라서 볼 수는 없습니다. 추후 지원 가능성은
            있습니다.
          </div>
        </FAQ>
        <FAQ>
          <div>2. 내 글에 대한 반응을 알 수는 없나요?</div>
          <div>
            반응을 위한 글이 아닌 솔직한 자신에 대해 표현해 주세요. 현재
            지원하지 않는 기능 입니다.
          </div>
        </FAQ>
      </Piece>
      <Piece>
        <PieceHeader>설문조사</PieceHeader>
        <div>모모 프로젝트가 더 발전할 수 있도록 설문조사에 참여해 주세요.</div>
        <div>설문조사</div>
      </Piece>
      <Piece>
        <PieceHeader>Contact</PieceHeader>
        <form ref={form} onSubmit={sendEmail}>
          <InputWrapper>
            <label>Name</label>
            <input type="text" name="user_name" />
          </InputWrapper>
          <InputWrapper>
            <label>Email</label>
            <input type="email" name="user_email" />
          </InputWrapper>
          <InputWrapper>
            <label>Message</label>
            <textarea name="message" ref={textareaRef} onChange={onTyping} />
            <SubmitButton
              type="submit"
              value="Send"
              disabled={text.length > 5 ? false : true}
            />
          </InputWrapper>
        </form>
      </Piece>
    </Wrapper>
  );
};

export default Contactus;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.pantone};
  font-family: ${(props) => props.theme.font.gothic_font};
  /* padding: 1rem; */
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 150%;
  margin-top: 2.5rem;
  /* padding-top: 5rem; */
  /* padding-bottom: 10rem; */
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;

const Background = styled.div`
  position: absolute;
  top: 30vh;
  right: -97px;
  line-height: 16rem;
  font-size: 20rem;
  font-weight: 700;
  opacity: 0.1;
  user-select: none;
  cursor: default;
  overflow: hidden;
`;

const TxtBack = styled.span`
  display: block;
`;

const Piece = styled.div`
  border-bottom: solid 1px black;
  margin-bottom: 1rem;
  padding-top: 1rem;
`;

const PieceHeader = styled.div`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const FAQ = styled.div`
  > div:first-child {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  margin-bottom: 1rem;
`;

const InputWrapper = styled.div`
  /* margin-bottom: 2rem; */
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
  > textarea {
    width: 100%;
    height: 4rem;

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

const SubmitButton = styled.input`
  margin-top: 1rem;
  width: 100%;
  height: 2rem;
  background-color: ${(props) => props.theme.color.camel};
`;
