import styled from "styled-components";

const MainContainer = styled.div`
  font-family: "Playfair Display", serif;
  height: 100vh;
  width: 100%;
  background-color: #000000;
`;
const ImageDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SideDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const H2 = styled.h2`
  color: #ffffff;
  font-weight: 300;
  font-size: 50px;
  margin-top: 170px;
  margin-left: 150px;
  letter-spacing: 4px;
`;
const Span = styled.span`
  color: #66cdaa;
  font-size: 70px;
`;
const BlogButton = styled.button`
  width: 400px;
  height: 70px;
  font-size: 30px;
  border-radius: 15px;
  margin-left: 150px;
  margin-top: 20px;
  color:#298186;
  cursor: pointer;
  &:hover{
    background-color:#298186;
    color: #000000;
  }
`;
const Img = styled.img`
  width: 50%;
  height: 20%;
  margin-top: 90px;
  margin-right: 50px;
  border-radius: 15px;
`;
export { MainContainer, ImageDiv, H2, Span, BlogButton, SideDiv, Img };
