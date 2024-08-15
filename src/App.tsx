import "./App.css";
import RouteComponent from "routes";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "scrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteComponent />
    </BrowserRouter>
  );
};
export default App;
