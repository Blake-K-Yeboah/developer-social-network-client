// For accessing document head
import { Helmet } from "react-helmet";

// Page Components
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

// Material UI Components
import { Container, Typography } from "@material-ui/core";

const Login = () => {
   return (
      <>
         <Helmet>
            <title>Developer Social Network - Login</title>
         </Helmet>
         <Navbar />
         <br />
         <br />
         <br />
         <br />
         <Container>
            <Typography variant="h3" component="h3">
               Login
            </Typography>
            <br />
            <Typography variant="body1" component="p">
               Fill out the following form to login
            </Typography>
            <br />
            <br />
            <LoginForm />
         </Container>
      </>
   );
};

export default Login;
