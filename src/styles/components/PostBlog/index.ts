import styled from "styled-components";

const MainWrapper = styled.div`
display: flex;
justify-content:center;
align-items:center;
margin-top:100px;
`;

const Postmaincontainer = styled.div`
  font-family: "Poppins", sans-serif;
  height: 100%;
`;
const PostContainer = styled.form`
   display:flex;
   justify-content:space-around;
`;
const Header = styled.h1`
  font-size: 50px;
  font-weight: 600;
  text-align:center;
  color: #4682b4;
`;
const Input = styled.input`
  width: 300px; 
  border: none;
  font-size: 30px;
  outline: none;
  color: gray;
  border-bottom: 2px solid gray;
  padding-top: 20px;
  opacity: 0.8;
`;
const Textarea = styled.textarea`
  width: 300px; 
  border: none;
  font-size: 30px;
  outline: none;
  color: gray;
  padding-top: 20px;
  overflow:auto;
  border-bottom: 2px solid gray;
  opacity: 0.8;
`;
const InputFile = styled.input`
  border: none;
  font-size: 30px;
  padding-top: 40px;
`;
const Button = styled.button`
  width: 180px;
  height: 60px;
  font-size: 30px;
  border-radius: 20px;
  margin-top:20px;
  border: 1px solid #000000;
  cursor: pointer;
  background-color: #4682b4;
  color: #ffffff;
  &:hover {
    background-color: #20b2aa;
  }
`;

export {
  PostContainer,
  Postmaincontainer,
  Button,
  Input,
  InputFile,
  Header,
  Textarea,MainWrapper
};