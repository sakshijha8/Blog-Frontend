import React from 'react'
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import WebDevelopment from "assests/svgs/web-development.svg";
import MobileDevelopment from "assests/svgs/mobile-development.svg";
import UIDesign from "assests/svgs/UIdesign.svg";
import DedicatedTeam from "assests/svgs/dedicated-team.svg";
import RORDevelopment from "assests/svgs/ror-development.svg";
import AngularDevelopment from "assests/svgs/angular-development.svg";
import ReactDevelopment from "assests/svgs/react-development.svg"
import {ServicesContainer,ContentWrapper,Heading,ParaHeading,Para,ServicesContent,Heading1,ContentDiv,Div1,WebImage,H3,P} from "styles/components/Services";

const Services = () =>{
  return (
    <><Navbar />
    <ServicesContainer>
      <ContentWrapper>
        <Heading>Services</Heading>
        <ParaHeading>
            <Para>We offer full-stack mobile and web development services together with requirements analysis, quality assurance, and project management. We have all the expertise you need to produce a fully-fledged, stable, and scalable product.</Para>
        </ParaHeading>
      </ContentWrapper>
    </ServicesContainer>
    <ServicesContent>
    <Heading1>Our Services</Heading1>
    <ContentDiv>
        <Div1>
            <WebImage src= {WebDevelopment} alt="WebDevelopment" />
            <H3>Web Development</H3>
            <P>Frontend, Backend, <br/>QA</P>
        </Div1>
        <Div1>
            <WebImage src= {MobileDevelopment} alt="MobileDevelopment" />
            <H3>Mobile Development</H3>
            <P>Android, iOS,Hybrid <br/>API, QA</P>
        </Div1>
        <Div1>
            <WebImage src= {UIDesign} alt="UIDesign" />
            <H3>UX/UI Design</H3>
            <P>Reserach, UX Strategy, UI Design ,<br/>Usability, Testing</P>
        </Div1>
        <Div1>
            <WebImage src= {DedicatedTeam} alt="DedicatedTeam" />
            <H3>Dedicated Team</H3>
            <P>Analysis, Team, Selection , <br/>Qperation, Launch</P>
        </Div1>
        <Div1>
            <WebImage src= {RORDevelopment} alt="RORDevelopment" />
            <H3>ROR Development</H3>
            <P>Web API, App Development, QA ,<br/>Consulting</P>
        </Div1>
        <Div1>
            <WebImage src= {AngularDevelopment} alt="AngularDevelopment" />
            <H3>Angular Development</H3>
            <P>App Development, Web Development, <br/>Consulting</P>
        </Div1>
        <Div1>
            <WebImage src= {ReactDevelopment} alt="WebDevelopment" />
            <H3>React Development</H3>
            <P>Application Development, Web Development, QA</P>
        </Div1>
    </ContentDiv>
    <Footer/>
  </ServicesContent>
  </>
  )
}

export default Services;