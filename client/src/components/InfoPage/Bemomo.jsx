import styled from "styled-components";

const Bemomo = () => {
  return (
    <Wrapper>
      <Title>매일 같은 일상에 ‘모모’ 한 스푼</Title>
      <Paragraph>
        하루 5분의 시간으로
        <br /> 가벼운 일상 이야기부터
        <br /> 진지하고 진솔한 감정까지
        <br />
        다양한 이야기로 서로의 삶을 공유합니다.
      </Paragraph>
      <Paragraph>
        모모가 되는 방법은요? 간단해요!
        <br /> ‘모모'라는 이름으로
        <br /> 솔직한 일상을 나누면 됩니다.
        <br /> 누구나 모모가 될 수 있어요.
      </Paragraph>
      <Paragraph>
        무슨 이야기를 써야할지 고민이라면?
        <br /> 다양한 질문들을 선택해보고
        <br /> 마음에 드는 질문을 선택해서 써보세요!
        <br /> 👉🏻 질문 선택하기(링크 연결-메인페이지)
      </Paragraph>
      <Paragraph>
        모모로 글을 다 썼다면?
        <br /> 다른 모모의 글을 구경해보세요.
        <br /> 👉🏻 다른 모모의 글 보기 (링크 연결)
      </Paragraph>
      <Paragraph>
        다양한 질문으로 글을 쓰고
        <br /> 나의 모모 글을 모아서 보세요.
        <br /> 👉🏻  My MOMO 보기 (링크 연결)
      </Paragraph>
      <Paragraph>
        세상의 모든 모모들을 위해
        <br /> 에티켓을 지켜주세요.
        <br />
        👉🏻  MOMO 규칙 확인하기 (링크 연결)
      </Paragraph>
      <Paragraph>
        세상의 모든 모모를 위해!
        <br /> 하루 5분, 모모하세요!
      </Paragraph>
    </Wrapper>
  );
};

export default Bemomo;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.pantone};
`;

const Title = styled.div`
  /* margin-top: 1rem; */
  margin-bottom: 2rem;
  font: bolder;
  font-size: 1.5rem;
`;

const Paragraph = styled.div`
  margin-bottom: 1rem;
  line-height: 150%;
  margin-left: 1rem;
`;
