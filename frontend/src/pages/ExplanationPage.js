import styled from "styled-components";
import TypingText from "components/utils/Typing";
import MyButton from "components/common/Button";
import { useNavigate } from "react-router";
import Explanation_IMG from "resources/images/Explanation_IMG.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
//   border: 1px solid black;
//   border-radius: 20px;
  margin: 19.5px;
  width: 20vw;
  position: relative;
  top: 28%;
  left: -0.5%;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
//   justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url(${Explanation_IMG}) no-repeat center;
  background-size: 100% 100%;
`;

const ButtonDiv = styled.div`
    position: absolute;
    top: 50%;
`;



const ExplanationPage = () => {
    const navigate = useNavigate();

    const toLobby = () => {
        navigate('/lobby')
    }

    return (
      <Page>
        <Container>
            <TypingText text="[속보] 현재 미지의 초록색 외생명체 침입 중. 지금 당장 자매행성 지구로 탈출하길 바람." speed={60} fontSize="1.25rem" color="white" />
        </Container>
        <ButtonDiv>
            <MyButton
            lang={"Korean"}
            text={"　탈출하기　"}
            type={"is-primary"}
            onClick={toLobby}
            />
        </ButtonDiv>
      </Page>
    );
  };
  
  export default ExplanationPage;
  