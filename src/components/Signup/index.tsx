import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignup } from "interfaces/ISignup";
import { useNavigate } from "react-router-dom";
import signupimage from "assests/signupimage.png";
import { phoneRegExp } from "constant/constant";
import { useDispatch } from "react-redux";
import { addData } from "store/Slice/UserSlice";
import {
  SignupContainer,
  Heading3,
  SignupButton,
  Img,
  SideContent1,
  Span,
  SpanDiv,
} from "styles/components/Signup";
import {
  FormContent,
  LoginContent,
  Heading,
  Form,
  Input,
} from "styles/components/Login";
import { useState } from "react";

// Schema for Yup Validation
const SignupSchema = yup.object().shape({
  username: yup.string().required().min(2, "Too Short").max(12, "Too Long"),
  email: yup.string().email("Invalid Email").required(),
  password: yup.string().required("Password is Required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10)
    .max(10),
});

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({
    resolver: yupResolver(SignupSchema),
  });
  const[info,setInfo] = useState<ISignup>();

  const getData =  async (data: any) => {
    
    let res = await axios.post('https://blog-mern-app-delta.vercel.app/user/signup', data);
    console.log(res);

    // Add Toaster from Backend
    if (res.data.message === "SignUp Successfully!") {
      toast.success("SignUp Successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.warning("User already Exist", {
        position: "top-right",
        autoClose: 2000,
      });
    }
    // Condition to navigate to Loginpage
    if (res.data) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
    setInfo(data) 
  };
    const dispatch = useDispatch();
    dispatch(addData(info));
  return (
    <div>
      <SignupContainer>
        <FormContent style={{ height: "auto" }}>
          <LoginContent>
            <Heading style={{ marginTop: "50px" }}>Create Your Account</Heading>
            <Form
              onSubmit={handleSubmit(getData)}
              style={{ marginTop: "30px" }}
            >
              <Input
                {...register("username")}
                type="text"
                placeholder="Enter Username"
              />
              {errors.username && <SpanDiv>{errors.username.message}</SpanDiv>}
              <Input
                {...register("email")}
                type="email"
                placeholder="Enter Email"
              ></Input>
              {errors.email && <SpanDiv>{errors.email.message}</SpanDiv>}
              <Input
                {...register("password")}
                type="password"
                placeholder="Enter Password"
              ></Input>
              {errors.password && <SpanDiv>{errors.password?.message}</SpanDiv>}
              <Input
                {...register("phone")}
                type="text"
                placeholder="Enter Phone No."
              ></Input>
              {errors.phone && <SpanDiv>{errors.phone.message}</SpanDiv>}
              <SignupButton type="submit">Sign Up</SignupButton>
            </Form>
            <Heading3>
              Already have an Account ?{" "}
              <Span onClick={() => navigate("/login")}>Sign In</Span>
            </Heading3>
          </LoginContent>
          <SideContent1>
            <Img src={signupimage} alt="signup image" />
          </SideContent1>
        </FormContent>
      </SignupContainer>
      <ToastContainer />
    </div>
  );
};
export default Register;
