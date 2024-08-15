import aboutus from "assests/aboutus.avif";
import { AboutWrapper,Wrapper, Head, ParaContent,Para, ImageContainer,Img } from "styles/components/AboutUs";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <AboutWrapper>
    <Wrapper>
        <Head>About US</Head>
        <ParaContent>
          <Para>
            We’re a fully distributed team of 78 people living and working in 20
            countries around the world. And we are working to build the best
            products to help our customers build their brands and grow their
            businesses on social media.We’ve always aimed to do things a little
            differently at Buffer.we’ve had a focus on building one of the most
            unique and fulfilling workplaces by rethinking a lot of traditional
            practices.
          </Para>
        </ParaContent>
      </Wrapper>
      <ImageContainer>
        <Img src={aboutus} alt="aboutus" /> 
      </ImageContainer>
    </AboutWrapper>
    <Footer/>
    </>
  );
};

export default AboutUs;
