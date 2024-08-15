import styled from "styled-components";
import background from "assests/Servicesbackground.jpg";
export const ServicesContainer = styled.div`
  font-family: "Inter", sans-serif;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6) url(${background});
  background-blend-mode: darken;
  background-size: cover;
  z-index: -1;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  margin-left: 150px;
  margin-top: 250px;
`;
export const Heading = styled.h1`
  color:#298186;
  font-size: 80px;
  font-weight: 600;
`;
export const ParaHeading = styled.div`
  max-width: 900px;
  line-height: 50px;
  margin-top: -40px;
`;
export const Para = styled.p`
  font-weight: 300;
  font-size: 35px;
  color: #ffffff;
  text-align: justify;
`;
export const ServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 900px;
`;
export const Heading1 = styled.div`
  font-size: 60px;
  margin-left: 150px;
  font-weight: 700;
`;
export const ContentDiv = styled.div`
  gap: 60px;
  display: flex;
  padding:  0 5vw;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 80px;
`;
export const H3 = styled.h3`
   font-size: 25px;
   font-weight:400;
   line-height: 1.3rem;
   text-align:center;
`;
export const P = styled.p`
  font-size: 20px;
  margin-top:-4px;
  text-align:center;
`;
export const Div1 = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  background-color: #f6f6f6;
  border-radius: 10px;
  width: 350px;
  height: 400px;
  cursor: pointer;
  &:hover{
    background-color: #000000;
    ${H3}{
      color:#4682b4
    }
    ${P}{
   color:#ffffff;
    }
  }
`;
export const WebImage = styled.img`
  width:350px;
  height: 200px;
`;