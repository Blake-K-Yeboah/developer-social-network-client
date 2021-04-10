// For accessing document head
import { Helmet } from "react-helmet";

// Page Components
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";

const Home = () => {
   return (
      <>
         <Helmet>
            <title>Developer Social Network - Home</title>
         </Helmet>
         <Navbar />
         <PostList />
      </>
   );
};

export default Home;
