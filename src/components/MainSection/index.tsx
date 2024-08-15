import blog from "assests/blog.jpg";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  ImageDiv,
  SideDiv,
  H2,
  Span,
  Img,
  BlogButton,
} from "styles/components/Mainsection";
const Mainsection = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainContainer>
        <ImageDiv>
          <SideDiv>
            <H2>
              We Are <Span>Creative</Span>
              <br /> Digital Agency
            </H2>
            <BlogButton onClick={() => navigate("/createpost")}>
              Create your Blog Here <i className="fa-sharp fa-solid fa-arrow-right"></i>
            </BlogButton>
          </SideDiv>
          <Img src={blog} alt="blogimage" />
        </ImageDiv>
      </MainContainer>
    </>
  );
};

export default Mainsection;
