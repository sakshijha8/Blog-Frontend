import { Navigate } from "react-router-dom";
import isLogin  from "utils/isLogin";
import Createpost from "pages/createpost";

const Privateroute = ({ component: RouteComponent }: any) => {
  return isLogin() ? <Createpost /> : <Navigate to="/login" />;
};


export default Privateroute;
