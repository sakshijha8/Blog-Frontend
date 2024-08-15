import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SlLike,SlDislike } from "react-icons/sl";
import {
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
} from "styles/components/Blogs";


const Blog = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get('https://blog-mern-app-delta.vercel.app/posts/getposts');
      setData(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  //getData();
  useEffect(() => {
    getData();
  }, []);
  const handleSubmit=(id:String)=>{
    navigate(`/content/${id}`)
}
  return (
    <>
      <BlogContainer>
        <BlogContent>
          <BlogHeading>Related Articles</BlogHeading>
          <BlogDiv>
            {data?.map((obj:any, index) => 
              <BlogImageDiv key={index}>
              <Img src={obj?.images} alt="image" />
              <HeaderDiv>
                <DivHeading>
                  {obj.title}
                </DivHeading>
                <ParaHeading>
                 {obj.description}
                </ParaHeading>
                <Line></Line>
                <ReadDiv>
                <ReadHeading onClick={()=>{handleSubmit(obj._id)}} >
                  Read More <i className="fa-sharp fa-solid fa-arrow-right"></i>
                </ReadHeading>
                <LikeWrapper>
            <SlLike />
            <>{obj.likes.length}</>
            <SlDislike style={{marginTop:"3px"}}/>
            <>{obj.dislikes.length}</>
            </LikeWrapper>
                </ReadDiv>
              </HeaderDiv>
            </BlogImageDiv>
            )}
            
          </BlogDiv>
        </BlogContent>
      </BlogContainer>
    </>
  );
};

export default Blog;
