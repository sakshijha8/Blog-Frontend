import { IRoute } from "interfaces/IRoutes";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import Homepage from "pages/homepage";
import Createpost from "pages/createpost";
import Signin from "pages/signIn";
import Signup from "pages/signup";
import Privateroute from "./privateroutes";
import Publicroute from "./publicroutes";
import Servicespage from "pages/Services";
import AboutusPage from "pages/Aboutus";
import Content from "components/Content";
const myroute: IRoute[] = [
  {
    path: "/",
    component: <Homepage />,
    restricted: false,
  },
  {
    path: "/createpost",
    component: <Createpost />,
    restricted: true,
  },
  {
    path: "/login",
    component: <Signin />,
    restricted: false,
  },
  {
    path: "/signup",
    component: <Signup />,
    restricted: false,
  },
  {
    path: "/services",
    component: <Servicespage/>,
    restricted: false,
  },
  {
    path: "/aboutus",
    component: <AboutusPage/>,
    restricted: false,
  },
  {
    component:<Content/>,
    path:"/content/:id",
    restricted:false
  }

];

const RouteComponent = () => (
  <ReactRoutes>
    {myroute.map((route: IRoute, index: number) => {
      const { path, component, restricted } = route;
      return (
        <Route
          key={index}
          path={path}
          element={
            restricted ? (
              <Privateroute path = {path} component={component} />
            ) : (
              <Publicroute component={component} />
            )
          }
        />
      );
    })}
  </ReactRoutes>
);
export default RouteComponent;
