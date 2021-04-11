// For accessing document head
import { Helmet } from "react-helmet";

// Page Components
import Navbar from "../components/Navbar";

const Register = () => {
   return (
      <>
         <Helmet>
            <title>Developer Social Network - Register</title>
         </Helmet>
         <Navbar />
      </>
   );
};

export default Register;
