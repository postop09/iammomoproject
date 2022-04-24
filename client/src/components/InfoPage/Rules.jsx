import styled from "styled-components";

const Rules = () => {
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
      <Header>
        <div>
          <div>안녕하세요.</div>
          <span>
            아이엠 <Momo>`모모`</Momo> 프로젝트의 관리자 I’mground 팀입니다.
          </span>
        </div>
        <div>
          모모가 되어 주셔서 감사합니다. <br />
          즐거운 모모 생활을 위해 몇가지 규칙을 꼭 기억해주세요.
        </div>
      </Header>
      <Body>
        <BodyHeader>모모에서 지켜야 할 규칙사항</BodyHeader>
        <BodyParagraph>
          첫째, 모든 모모는 존중받아야 할 소중한 존재입니다.
        </BodyParagraph>
        <BodySubParagraph>
          - 비하, 판단, 차별, 증오, 혐오, 몰아가기, 편가르기 등의 발언은
          불가합니다. <br />- 무분별한 부정적인 여론을 형성하지 말아주세요.
        </BodySubParagraph>
        <BodyParagraph>
          둘째 광고, 스팸, 링크, 악성 콘텐츠 등은 모모 프로젝트에 적합하지
          않습니다. 이런 콘텐츠는 관리자의 권한으로 삭제될 수 있습니다.
        </BodyParagraph>
        <BodyParagraph>
          셋째, 정치, 종교 등 민감한 주제에 대한 논의를 하지 않습니다. 모모는
          ‘일상 공감’ 프로젝트라는 걸 기억해주세요.
        </BodyParagraph>
        <BodyParagraph>
          넷째, 주제 또는 질문에 맞는 이야기만 해주세요.
        </BodyParagraph>
        <BodyParagraph>
          다섯째 개인정보(이름, 연락처, 개인 이메일 등)을 묻지 않습니다.
        </BodyParagraph>
      </Body>
      <Rule>
        🚫 위 규칙을 어길 시, 경고 및 글 삭제 또는 탈퇴 처리가 될 수 있습니다.
      </Rule>
      <Footer>
        읽어주셔서 감사합니다.
        <br /> 즐거운 모모 생활을 함께 해보아요!
      </Footer>
    </Wrapper>
  );
};

export default Rules;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.pantone};
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 150%;
  margin-top: 2.5rem;
  font-family: ${(props) => props.theme.font.gothic_font};
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  /* width: 100vw;
  height: 100vh; */
  overflow: hidden;
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
  /* height: 100%; */
`;

const TxtBack = styled.span`
  display: block;
`;

const Header = styled.div`
  padding-top: 2rem;
  margin-bottom: 2rem;
  > div:first-child {
    padding-bottom: 1.1rem;
  }
  > div {
    padding-bottom: 1rem;
    > div {
      font-size: 1.2rem;
      padding-bottom: 0.5rem;
    }
  }
`;

const Body = styled.div`
  padding-bottom: 0.5rem;
`;

const BodyHeader = styled.div`
  font-size: 1.2rem;
  padding-bottom: 1rem;
`;

const BodyParagraph = styled.div`
  font-weight: bold;
  padding-bottom: 1rem;
`;

const BodySubParagraph = styled.div`
  padding-bottom: 0.5rem;
  padding-bottom: 1rem;
`;

const Rule = styled.div`
  padding-bottom: 2rem;
`;

const Footer = styled.div`
  color: orange;
`;

const Momo = styled.span`
  color: orange;
`;
