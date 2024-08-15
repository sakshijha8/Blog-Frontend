import styled from "styled-components";

export const CommentWrapper = styled.div`
  width: 70vw;
  margin: 0 auto;
  font-family: "Playfair Display", serif;
`;
export const BoxComment = styled.textarea`
  width: 70vw;
  height: 20vh;
  border: 1px solid #3f51b5;
  font-size:20px;
  padding:10px;
`;
export const LikeContainer = styled.div`
  position: absolute;
  left: 300px;
`;
export const Likeunlike = styled.div`
display: flex;
gap:15px;
width:70vw;
margin: 0 auto;
padding:10px;
font-size:35px;
cursor: pointer;
`;

export const Heading = styled.h1`
margin-left:300px;
padding-top:40px;
`;
export const Heading1 = styled.h1`
color: #4682b4;
`;
export const Heading2 = styled.h2``;
export const Button = styled.button`
  width: 150px;
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

// export const CommentDiv = styled.div`
//   margin-top: -20px;
//   margin-left: 20px;
//   display: flex;
//   gap: 20px;
//   cursor: pointer;
// `;
// export const ModalDiv = styled.div`
//   background-color: rgba(0, 0, 0, 0.2);
//   width: 100vw;
//   height: 100vh;
//   z-index: 0;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   position: absolute;
// `;

// export const Cross = styled.button`
// display: flex;
// justify-content:flex-end;
// margin-left:500px;
// cursor: pointer;
// `;
