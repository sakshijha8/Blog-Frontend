import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: space-around;
  margin-top: 130px;
  padding:30px;
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const H3 = styled.h2`
  color: #ffffff;
  &:hover {
    color: #298186;
  }
`;
const A = styled.a`
  color: #ffffff;
  font-size: 25px;
`;
const Header = styled.h2`
  color: #ffffff;
  margin-left: 70px;
  &:hover {
    color: #298186;
  }
`;
const FooterButton = styled.input`
  width: 280px;
  height: 40px;
  border-radius: 15px;
  padding: 0 60px;
  font-size: 15px;
  font-weight: 600;
`;
const SubscribeButton = styled.button`
  width: 150px;
  height: 40px;
  padding: 10px;
  font-size: 15px;
  border-radius: 20px;
  margin-left: 70px;
  margin-top: 20px;
`;
const ContactHead = styled.h2`
  color: #ffffff;
  &:hover {
    color: #298186;
  }
`;
const HomeDiv1 = styled.div`
  display: flex;
  gap: 20px;
`;
const HomeDiv = styled.p`
  color: #ffffff;
  font-size: 20px;
`;
export {
  FooterContainer,
  FooterContent,
  H3,
  A,
  Header,
  FooterButton,
  SubscribeButton,
  ContactHead,
  HomeDiv,
  HomeDiv1,
};
