import {
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
} from "styles/components/Footer";
import Home from "assests/home.png";
import Email from "assests/email.png";
import Call from "assests/call.png";
const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterContent>
          <H3>USEFUL LINKS</H3>
          <A>About</A>
          <A>Services</A>
          <A>Contact</A>
          <A>Shop</A>
          <A>Blog</A>
        </FooterContent>
        <FooterContent>
          <Header>NEWSLETTER</Header>
          <FooterButton
            type="text"
            placeholder="Your Email Address"
          ></FooterButton>
          <SubscribeButton>Subscribe Now</SubscribeButton>
        </FooterContent>
        <FooterContent>
          <ContactHead>CONTACT</ContactHead>
          <HomeDiv1>
            <img src={Home} alt="jh" width="60" />
            <HomeDiv>New York, NY 10012, US</HomeDiv>
          </HomeDiv1>
          <HomeDiv1>
            <img src={Email} alt="email" width="60" />
            <HomeDiv>info@example.com</HomeDiv>
          </HomeDiv1>
          <HomeDiv1>
            <img src={Call} alt="email" width="60" />
            <HomeDiv>+01 234 567 88</HomeDiv>
          </HomeDiv1>
        </FooterContent>
      </FooterContainer>
    </div>
  );
};

export default Footer;
