// React useContext and useState hooks
import { useContext, useState } from "react";

// Material UI
import {
   Button,
   AppBar,
   Toolbar,
   Typography,
   Container,
   IconButton,
   Menu,
   MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// Authentication Context
import { AuthContext } from "../context/auth";

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
   const { user, logout } = useContext(AuthContext);

   // Custom Classes
   const classes = useStyles();

   // Openning Menu Variables
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);

   // Openning Menu Handlers
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const buttons = user ? (
      <>
         <IconButton onClick={handleClick}>
            <AccountCircleIcon />
         </IconButton>
         <Menu
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
         >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
         </Menu>
      </>
   ) : (
      <>
         <Button color="light" variant="outlined">
            Login
         </Button>
         <Button
            color="light"
            variant="outlined"
            className={classes.rightButton}
         >
            Register
         </Button>
      </>
   );

   return (
      <AppBar position="static">
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
