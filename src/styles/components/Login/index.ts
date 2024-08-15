import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const FormContent = styled.div`
  width: 50%;
  height: 500px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  font-family: "Playfair Display", serif;
  gap: 30px;
  border-radius: 20px;
  overflow: hidden;
`;
const LoginContent = styled.div`
  width: 60%;
`;
const SideContent = styled.div`
  width: 40%;
  background: linear-gradient(
    to bottom left,
    rgb(32, 178, 170),
    rgb(102, 205, 170)
  );
`;
const SideHead = styled.h1`
  font-family: "Inter", sans-serif;
  color: #ffffff;
  margin-top: 150px;
  text-align: center;
  font-size: 40px;
`;
const SideHead2 = styled.h3`
  color: #ffffff;
  font-family: "Inter", sans-serif;
  margin-top: 30px;
  margin-left: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 300;
`;
const SideButton = styled.button`
  margin-top: 30px;
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  margin-left: 110px;
  width: 160px;
  height: 50px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
`;

const Heading = styled.div`
  margin-top: 70px;
  text-align: center;
  font-size: 40px;
  font-weight: 500;
`;
const Heading2 = styled.h2`
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: #a9a9a9;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 30px;
`;

const Input = styled.input`
  border: 1px solid black;
  height: 40px;
  width: 300px;
  font-size: 20px;
  border-radius: 15px;
  padding: 0 15px;
`;
const FormButton = styled.button`
  width: 170px;
  height: 50px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  color: #ffffff;
  background: linear-gradient(
    to bottom left,
    rgb(32, 178, 170),
    rgb(102, 205, 170)
  );
`;
export {
  LoginContainer,
  LoginContent,
  FormContent,
  Form,
  Heading,
  Heading2,
  Input,
  FormButton,
  SideContent,
  SideHead,
  SideHead2,
  SideButton,
};
