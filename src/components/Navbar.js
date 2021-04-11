// React useContext hook
import { useContext } from "react";

// Material UI
import {
   Button,
   AppBar,
   Toolbar,
   Typography,
   Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Authentication Context
import { AuthContext } from "../context/auth";

// useHistory hook
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
   root: {
      flexGrow: 1,
   },
   title: {
      flexGrow: 1,
   },
   rightButton: {
      marginLeft: 15,
      textDecoration: "none",
   },
   leftButton: {
      textDecoration: "none",
   },
}));

const Navbar = () => {
   // User + Logout from context
   const { user } = useContext(AuthContext);

   // Custom Classes
   const classes = useStyles();

   // History Hook
   let history = useHistory();

   const redirectHandler = (route) => {
      history.push(route);
   };

   const buttons = user ? (
      <>
         <Button color="secondary" variant="outlined">
            Logout
         </Button>
      </>
   ) : (
      <>
         <Button
            color="default"
            variant="outlined"
            className={classes.leftButton}
            onClick={redirectHandler.bind(this, "login")}
         >
            Login
         </Button>
         <Button
            color="default"
            variant="outlined"
            className={classes.rightButton}
            onClick={redirectHandler.bind(this, "register")}
         >
            Register
         </Button>
      </>
   );

   return (
      <AppBar position="static" color="primary">
         <Container>
            <Toolbar>
               <Typography variant="h6" className={classes.title}>
                  Developer Social Network
               </Typography>
               {buttons}
            </Toolbar>
         </Container>
      </AppBar>
   );
};

export default Navbar;
