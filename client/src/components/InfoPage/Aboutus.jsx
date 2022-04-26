import styled from "styled-components";

const Aboutus = () => {
  return (
    <Wrapper>
        <Background>
          <TxtBack>M</TxtBack>
          <TxtBack>O</TxtBack>
          <TxtBack>M</TxtBack>
          <TxtBack>O</TxtBack>
        </Background>
      <Greet>
        <div>안녕하세요.</div> 여러분. 아임그라운드 I’mground 팀입니다. 이
        사이트는 누가 만들었을까 궁금하셨나요? 그렇다면 아임그라운드 팀이 어떻게
        만들어졌는지 부터 알려드릴게요.
      </Greet>
      <div>
        저희는 우연히 함께 ‘프로젝트 라이언’에서 진행하는 한 수업에 참여하면서
        만나게 되었습니다. 4명이 모여 강제로? 사이드 프로젝트에 대해 이야기를
        하기 시작했어요.
        <TxtBlock>
          관심분야부터 취향까지 어느 것 하나 공통점이 없는, 전혀
          접점이 없는 사람들이었습니다. ‘이렇게나 공통점이 없을까’라고 생각하던
          차에, 재미있게도 프로젝트에 참여하게 된 이유가 비슷했습니다.
        </TxtBlock>
        <TxtStrong>‘소통'</TxtStrong> 그리고 <TxtStrong>‘커뮤니케이션'</TxtStrong>이라는 욕구였어요.
        <TxtBlock>
          객관적인 또는 주관적인 조건에서는 전혀 접점이 없던 저희들이 오히려 솔직한 욕구와 각자의 생활에
          대해 이야기하면서 서로의 공통점을 발견했던 것입니다. 재미있는
        경험이었죠.
        </TxtBlock>  그러다 ‘전혀 비슷하지 않은 사람들, 전혀 만날 일이 없는
        사람들이 서로 소통하는 방법은 없을까? 서로 공감하는 방법은 없을까?’라는
        철학적인 질문을 서로에게 묻기 시작했습니다.
        <TxtBlock>
          그렇다면 서로의 조건을 전혀 알 수 없는 <TxtStrong>‘일상에 대한 글'</TxtStrong>로 소통하는 건 어떨까라는 생각을 하게
          되었어요. 하나의 이름으로 글을 쓴다면? 익명이지만 익명같지 않은
          느낌이라면? 오히려 솔직한 글을 쓰고 일상을 나눌 수 있지 않을까라고
          생각했습니다. 
        </TxtBlock>
          접점이 없던 저희 4명이 서로에 대해 솔직하게 되면서,
          공감하기 시작했던 경험을 여러분과 함께 하고 싶어졌습니다. 그렇게,
          <TxtStrong> I’m MOMO 프로젝트</TxtStrong>를 시작하게 되었습니다.
      </div>
      <Footer>
        모모 프로젝트는 부족한 첫 발을 내딛고 있습니다.
        <br /> 많은 관심과 피드백 부탁드립니다. <br />
        오늘도 함께 <Momo>‘모모'</Momo>
        해보아요! <br />긴 글을 읽어주셔서 감사합니다. <br />
        아임그라운드 팀 올림
      </Footer>
    </Wrapper>
  );
};

export default Aboutus;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.pantone};
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 150%;
  margin-top: 2.5rem;
  font-family: ${(props) => props.theme.font.gothic_font};
  overflow: hidden;
`;

const Background = styled.p`
  position: absolute;
  top: 15vh;
  right: -97px;
  line-height: 16rem;
  font-size: 20rem;
  font-weight: 700;
  opacity: 0.1;
  user-select: none;
  cursor: default;
`;

const TxtBack = styled.span`
  display: block;
`;
const TxtBlock = styled.span`
  display: block;
  margin: 10px 0;
`;
const TxtStrong = styled.span`
  font-weight: 700;
  color: #d9730d;
`;

const Greet = styled.div`
  padding-top: 2rem;
  margin-bottom: 1rem;
  > div {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
`;

const Momo = styled.span`
  color: #d9730d;
`;

const Footer = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 1rem;
  padding-bottom: 40px;
  line-height: 150%;
`;
