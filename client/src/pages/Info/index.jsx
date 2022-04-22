import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router";
import Bemomo from "../../components/InfoPage/Bemomo";
import Rules from "../../components/InfoPage/Rules";
import Aboutus from "../../components/InfoPage/Aboutus";
import Contactus from "../../components/InfoPage/Contactus";

const Info = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let label = location.state.label;

  const backHandler = () => {
    navigate("/");
  };

  const switchDisplay = {
    bemomo: <Bemomo />,
    rules: <Rules />,
    aboutus: <Aboutus />,
    contactus: <Contactus />,
  };

  const title = {
    bemomo: "MOMO 되기",
    rules: "MOMO 규칙",
    aboutus: "About Us",
    contactus: "Contact Us",
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <button onClick={backHandler}>
          <Icon icon={faArrowLeft} />
        </button>
        <div>{title[label]}</div>
      </HeaderWrapper>
      <BodyWrapper> {switchDisplay[label]}</BodyWrapper>
    </Wrapper>
  );
};

export default Info;

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
  /* padding: 1rem; */
`;
