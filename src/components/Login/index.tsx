import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LoginContainer,
  FormContent,
  LoginContent,
  Form,
  Heading,
  Heading2,
  Input,
  FormButton,
  SideContent,
  SideHead,
  SideHead2,
  SideButton,
} from "styles/components/Login";
import { SpanDiv } from "styles/components/Signup";
import { ILogin } from "interfaces/ILogin";
import { useNavigate } from "react-router-dom";

// Schema for Yup Validation
const LoginSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required(),
  password: yup.string().required("Password is Required"),
});
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(LoginSchema) });
  const getData = async (data: any) => {
    let res = await axios.post('https://blog-mern-app-delta.vercel.app/user/signin', data);
    localStorage.clear()
  
    localStorage.setItem('login',res.data.JWT)

    console.log(res);
    if (res.data.message === "User has loggedIn") {
      toast.success("User has loggedIn", {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.warning("New User Please Signup", {
        position: "top-right",
        autoClose: 2000,
      });
    }
    //Condition to navigate to Homepage
    if (res.data.message === "New User Please Signup") {
      setTimeout(() => {
        navigate("/signup");
      }, 3000);
    } else {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div>
      <LoginContainer>
        <FormContent>
          <LoginContent>
            <Heading>Login to Your Account</Heading>
            <Heading2>Please Login to Continue....</Heading2>
            <Form onSubmit={handleSubmit(getData)}>
              <Input
                {...register("email")}
                type="email"
                placeholder="Email"
              ></Input>
              {errors.email && <SpanDiv>{errors.email.message}</SpanDiv>}
              <Input
                {...register("password")}
                type="password"
                placeholder="Password"
              ></Input>
              {errors.password && <SpanDiv>{errors.password.message}</SpanDiv>}
              <FormButton>Sign In</FormButton>
            </Form>
          </LoginContent>
          <SideContent>
            <SideHead>New Here ?</SideHead>
            <SideHead2>
              Sign up and discover a great <br />
              amount of new opportunities!
            </SideHead2>
            <SideButton onClick={() => navigate("/signup")}>Sign Up</SideButton>
          </SideContent>
        </FormContent>
      </LoginContainer>
      <ToastContainer />
    </div>
  );
};
export default Login;
