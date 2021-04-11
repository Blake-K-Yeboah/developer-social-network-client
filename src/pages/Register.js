// For accessing document head
import { Helmet } from "react-helmet";

// Page Components
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

// Material UI Components
import { Container, Typography } from "@material-ui/core";

const Register = () => {
   return (
      <>
         <Helmet>
            <title>Developer Social Network - Register</title>
         </Helmet>
         <Navbar />
         <br />
         <br />
         <br />
         <br />
         <Container>
            <Typography variant="h3" component="h3">
               Register
            </Typography>
            <br />
            <Typography variant="body1" component="p">
               Fill out the following form to register
            </Typography>
            <br />
            <br />
            <RegisterForm />
         </Container>
      </>
   );
};

export default Register;
