import styled from "styled-components";

const BlogContainer = styled.div`
  height: auto;
  font-family: "Poppins", sans-serif;
`;
const BlogContent = styled.div`
  height: auto;
  margin-top: 120px;
`;
const BlogDiv = styled.div`
  gap: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const BlogImageDiv = styled.div`
  width: 420px;
  height: 550px;
  border-radius: 10px;
  margin-top: 60px;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  &:hover {
    transform: scale(1.05);
    transition: 1s ease-in;
  }
`;
const BlogHeading = styled.h1`
  text-align: center;
  padding-top: 30px;
  font-size: 50px;
`;
const Img = styled.img`
  width: 420px;
  height: 240px;
  text-align:center;
`;
const DivHeading = styled.h1`
  margin-top: 0;
  margin-left: 20px;
  font-size: 25px;
  font-weight: 900;
  letter-spacing: 2px;
`;
const ParaHeading = styled.p`
  margin-left: 20px;
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: 600;
  line-height: 1.5rem;
`;
const ReadHeading = styled.a`
  color: #000000;
  font-weight: 600;
  font-size:20px;
  cursor: pointer;
  margin-left:280px;
  padding-top:40px;
`;
const HeaderDiv = styled.div`
  margin-top: -8px;
  padding-top: 8px;
  background-color: rgb(255, 255, 255);
  width: 420px;
  height: 500px;
  &:hover {
    background-color: #000000;
    color: white;
    ${DivHeading} {
      color: #4682b4;
    }
    ${ParaHeading} {
      color: #ffffff;
    }
    ${ReadHeading} {
      color: #4682b4;
      border-bottom:2px solid #ffffff;
    }
  }
`;
const LikeWrapper = styled.div`
margin-left:25px;
font-size:30px;
margin-top:-25px;
display:flex;
gap:8px;
`;
const Line = styled.div`
width:420px;
border: 1px solid gray;
opacity:0.3;
margin-top:50px;
`;
const ReadDiv = styled.div`
 margin-top:30px;
`;
export {
  BlogContainer,
  BlogContent,
  BlogDiv,
  BlogImageDiv,
  BlogHeading,
  Img,
  HeaderDiv,
  DivHeading,
  ParaHeading,Line,ReadDiv,
  ReadHeading,LikeWrapper
};
