import styled from "styled-components";

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Heading3 = styled.h3`
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 400;
`;
const Img = styled.img`
  width: 500px;
  height: 100%;
`;
const SpanDiv = styled.span`
  color: #ff0000;
`;
const SideContent1 = styled.div``;
const Span = styled.span`
  color: #e66465;
  border-bottom: 3px solid #9198e5;
  cursor: pointer;
`;
const SignupButton = styled.button`
  width: 170px;
  height: 50px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 25px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  background: linear-gradient(#e66465, #9198e5);
`;
export {
  SignupContainer,
  Heading3,
  SignupButton,
  Img,
  Span,
  SpanDiv,
  SideContent1,
};
