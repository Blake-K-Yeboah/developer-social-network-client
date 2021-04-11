// Use State Hook for controlling inputs
import { useState, useContext } from "react";

// Material UI Components
import { Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

// GraphQL
import { gql, useMutation } from "@apollo/client";

// Context
import { AuthContext } from "../context/auth";

const useStyles = makeStyles(() => ({
   input: {
      width: "100%",
   },
}));

const LoginForm = (props) => {
   const classes = useStyles();

   const breakEl = (
      <>
         <br />
         <br />
         <br />
      </>
   );

   const [values, setValues] = useState({
      username: "",
      password: "",
   });
   const context = useContext(AuthContext);
   const [errors, setErrors] = useState({});

   const handleInputChange = (e) => {
      setValues({ ...values, [e.target.id]: e.target.value });
   };

   const [loginUser] = useMutation(LOGIN_USER, {
      update(_, { data: { login: userData } }) {
         context.login(userData);
         props.history.push("/");
      },
      onError(err) {
         if (err.graphQLErrors[0]) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
         }
      },
      variables: values,
   });

   const loginUserFormHandler = (e) => {
      e.preventDefault();
      loginUser();
   };

   return (
      <Grid container>
         <Grid item xs={12} md={6}>
            {Object.keys(errors).length > 0 && (
               <>
                  <Alert severity="error">
                     <AlertTitle>
                        Your submission received the following errors:
                     </AlertTitle>
                     <ul>
                        {Object.values(errors).map((value) => (
                           <li key={value}>{value}</li>
                        ))}
                     </ul>
                  </Alert>
                  {breakEl}
               </>
            )}
            <form noValidate autoComplete="off" onSubmit={loginUserFormHandler}>
               <TextField
                  label="Username"
                  id="username"
                  className={classes.input}
                  onChange={handleInputChange}
                  value={values.username}
               />
               {breakEl}
               <TextField
                  label="Password"
                  id="password"
                  type="password"
                  className={classes.input}
                  onChange={handleInputChange}
                  value={values.password}
               />
               {breakEl}
               <Button variant="contained" color="primary" type="submit">
                  Login
               </Button>
            </form>
         </Grid>
      </Grid>
   );
};

const LOGIN_USER = gql`
   mutation login($username: String!, $password: String!) {
      login(username: $username, password: $password) {
         id
         email
         username
         createdAt
         token
      }
   }
`;

export default LoginForm;
