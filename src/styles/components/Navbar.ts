import styled from "styled-components";

const NavbarContainer = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #000000;
  width: 100%;
  height: 20%;
  padding: 25px;
  position: sticky;
  top: 0;
  z-index: 1;
`;
const NavbarButton = styled.div`
    display: flex;
`;
const NavbarDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const H1 = styled.h1`
  color: #ffffff;
  margin-left: 50px;
  font-weight: 800;
`;
const Ul = styled.ul`
  display: flex;
  gap: 90px;
`;
const Li = styled.li`
  color: #ffffff;
  list-style-type: none;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #298186;
    border-bottom: 3px solid #298186;
  }
`;
const Button = styled.button`
  color: #ffffff;
  width: 140px;
  height: 60px;
  font-size: 25px;
  background-color: #298186;
  border: none;
  font-weight: 600;
  border-radius: 12px;
  margin-right: 40px;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;
const SignupButton = styled.button`
  color: #000000;
  width: 140px;
  height: 60px;
  font-size: 25px;
  background-color: #ffffff;
  border: none;
  font-weight: 600;
  border-radius: 12px;
  margin-right: 40px;
  cursor: pointer;
  &:hover {
    background-color: #298186;
    color: #000000;
  }
`;
const LogoutButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 5px;
`;
export {
  NavbarContainer,
  NavbarButton,
  NavbarDiv,
  H1,
  Ul,
  Li,
  Button,
  SignupButton,
  LogoutButton,
};
