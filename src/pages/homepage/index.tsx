import Blog from "components/Blogs";
import Mainsection from "components/MainSection";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Mainsection />
      <Blog />
      <Footer />
    </div>
  );
};

export default Homepage;
