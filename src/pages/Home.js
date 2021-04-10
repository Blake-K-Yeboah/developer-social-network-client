// For accessing document head
import { Helmet } from "react-helmet";

// Page Components
import Navbar from "../components/Navbar";

const Home = () => {
   return (
      <>
         <Helmet>
            <title>Developer Social Network - Home</title>
         </Helmet>
         <Navbar />
      </>
   );
};

export default Home;
