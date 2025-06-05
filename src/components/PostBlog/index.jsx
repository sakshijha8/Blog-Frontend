import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {
  MainWrapper, PostContainer,
  Postmaincontainer,
  Button,
  Input,
  InputFile,
  Header,
  Textarea,
} from "styles/components/PostBlog";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "utils";

const PostBlog = () => {
  const { register, handleSubmit } = useForm();
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    let sendImage = await axios.post(
      `${apiUrl}/imageurl`,
      formData,
      {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
        withCredentials: true,
      }
    );
    return sendImage.data;
  };

  const sendData = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    formData.append("content", body);

    let res = await axios.post(`${apiUrl}/posts`, formData, {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
      },
      withCredentials: true,
    });

    if (res.status === 200) {
      toast.success("Post created Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "colored",
        style: { background: "rgb(125, 203, 94)" }
      });
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
  };
  return (
    <Postmaincontainer>
      <Header>Post Your Blog</Header>
      <PostContainer onSubmit={handleSubmit(sendData)}>
        <Input {...register("title")} type="text" placeholder="Title Here.." />
        <Textarea
          {...register("description")}
          placeholder="Add Description..."
        ></Textarea>
        <InputFile
          {...register("image")}
          type="file"
          placeholder="Choose File"
        />
        <Button>Post</Button>
      </PostContainer>
      <ToastContainer />
      <MainWrapper>
        <Editor
        apiKey="1fcrss3d3ljiwi8iz598ygs3okj0qjcf3kg4573mb5ttk55h"
          onEditorChange={(data) => {
            setBody(data);
          }}
          init={{
            selector: "textarea#file-picker",
            width: 1000,
            height: 500,
            automatic_uploads: true,
            file_picker_types: "image",
            file_picker_callback: (cb) => {
              const input = document.createElement("input");
              input.setAttribute("type", "file");
              input.setAttribute("accept", "image/*");

              input.onchange = async () => {
                let file = input.files[0];
                let res = await uploadImage(file);

                var reader = new FileReader();

                reader.onload = () => {
                  cb(res, { title: file.name });
                };
                reader.readAsDataURL(file);
              };
              input.click();
            },
            plugins: ["image"],
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:18px }",
          }}
        />
      </MainWrapper>
    </Postmaincontainer>
  );
};

export default PostBlog;
