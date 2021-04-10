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

// Navlink to change page
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
   root: {
      flexGrow: 1,
   },
   title: {
      flexGrow: 1,
   },
   rightButton: {
      marginLeft: 15,
   },
}));

const Navbar = () => {
   // User + Logout from context
   const { user } = useContext(AuthContext);

   // Custom Classes
   const classes = useStyles();

   const buttons = user ? (
      <>
         <Button color="secondary" variant="outlined">
            Logout
         </Button>
      </>
   ) : (
      <>
         <NavLink to="/login">
            <Button color="default" variant="outlined">
               Login
            </Button>
         </NavLink>
         <NavLink to="/register">
            <Button
               color="default"
               variant="outlined"
               className={classes.rightButton}
            >
               Register
            </Button>
         </NavLink>
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
