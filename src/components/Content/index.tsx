import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SlLike,SlDislike } from "react-icons/sl";
import Comment from "components/Comment";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Heading, Likeunlike } from "styles/components/Comment";
const Content = () => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const routeParams = useParams<string>();
  const postid = routeParams.id;
  const [user,setUser]=useState("")
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let post: any = await axios.get(
        `https://blog-mern-app-delta.vercel.app/posts/content/${postid}`
      );
      setUser(post.data.data.userId);
      setData(post.data.data.content);
      setTitle(post.data.data.title);
    };
    getData();
  }, [postid]);

  const getCommData = async () => {
    let commentList: any = await axios.get(
      `https://blog-mern-app-delta.vercel.app/showcomment/${postid}`
    );
    setComment(commentList.data.data);
    console.log("comment list", commentList?.data.data);
  };

  const handleLike = async () => {
    let islike = await axios.post('https://blog-mern-app-delta.vercel.app/posts/like', {
      postId: postid,
    });
    console.log(islike)
    if (islike.data.data.includes(user)) {
      setLike((prevState: any) => {
        return !prevState;
      });
      setDislike(false);
    } else {
      setLike((prevState: any) => {
        return !prevState;
      });
    }
  };
  const handledisLike = async () => {
    let disislike = await axios.post('https://blog-mern-app-delta.vercel.app/posts/dislike', {
      postId: postid,
    });
    //console.log(disislike)
    if (disislike.data.data.includes(user)) {
      setDislike((prevState: any) => {
        return !prevState;
      });
      setLike(false);
    } else {
      setDislike((prevState: any) => {
        return !prevState;
      });
    }
  };

  return (
    <>
      <Navbar />
      <Heading>{title}</Heading>
      <div>
        <div
          style={{ width: "70vw", margin: "0 auto", padding: "20px" }}
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>

        <Likeunlike>
          {like === true && dislike === false ? (
            <>
              <SlLike style={{ color: "blue" }} onClick={handleLike} />
            </>
          ) : (
            <>
              <SlLike onClick={handleLike} />
            </>
          )}
          {dislike === true && like === false ? (
            <>
              <SlDislike
                style={{ color: "red" }}
                onClick={handledisLike}
              />
            </>
          ) : (
            <>
              <SlDislike onClick={handledisLike} />
            </>
          )}
        </Likeunlike>
        <Comment getCommData={getCommData} />
        <>
          {comment?.map((obj: any) => {
            return <>{obj.comment}</>;
          })}
        </>
      </div>
      <Footer/>
    </>
  );
};

export default Content;
