
import { useNavigate } from "react-router-dom";
import logout from "assests/power-off.png"
import {
  NavbarContainer,
  NavbarDiv,
  H1,
  Ul,
  Li,
  NavbarButton,SignupButton,
  Button,LogoutButton
} from "styles/components/Navbar";
const Navbar = () => {
  const navigate = useNavigate();
  const logOut=()=>{
    localStorage.clear()
    window.location.reload();
  }
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <NavbarContainer>
        <NavbarDiv>
          <H1>BlogAPP</H1>
          <Ul>
            <Li onClick={()=>{
              navigate("/")
            }}style={{ borderBottom: "3px solid #298186" }}>Home</Li>
            <Li onClick={()=>{
              navigate("/services")
            }}>Services</Li>
            <Li onClick={()=>{
              navigate("/aboutus")
            }}>About Us</Li>
            <Li onClick={scrollToBottom}>Contact</Li>
          </Ul>
          <NavbarButton>
            {localStorage.getItem("login")?<LogoutButton onClick={logOut}>
           <img src= {logout} alt="logoutbutton" /></LogoutButton>:<><Button onClick={() => navigate("/login")}>Sign in</Button>
            <SignupButton 
              onClick={() => navigate("/signup")}
            >
              Sign up
            </SignupButton></>
    }
          </NavbarButton>
        </NavbarDiv>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
