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

const RegisterForm = (props) => {
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
      email: "",
      password: "",
      confirmPassword: "",
   });
   const context = useContext(AuthContext);
   const [errors, setErrors] = useState({});

   const handleInputChange = (e) => {
      setValues({ ...values, [e.target.id]: e.target.value });
   };

   const [addUser] = useMutation(REGISTER_USER, {
      update(_, { data: { register: userData } }) {
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

   const registerUser = (e) => {
      e.preventDefault();
      addUser();
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
            <form noValidate autoComplete="off" onSubmit={registerUser}>
               <TextField
                  label="Username"
                  id="username"
                  className={classes.input}
                  onChange={handleInputChange}
                  value={values.username}
               />
               {breakEl}
               <TextField
                  label="Email"
                  id="email"
                  className={classes.input}
                  onChange={handleInputChange}
                  value={values.email}
               />
               {breakEl}
               <TextField
                  label="Password"
                  type="password"
                  id="password"
                  className={classes.input}
                  onChange={handleInputChange}
                  value={values.password}
               />
               {breakEl}
               <TextField
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  className={classes.input}
                  onChange={handleInputChange}
                  value={values.confirmPassword}
               />
               {breakEl}
               <Button variant="contained" color="primary" type="submit">
                  Register
               </Button>
            </form>
         </Grid>
      </Grid>
   );
};

const REGISTER_USER = gql`
   mutation register(
      $username: String!
      $email: String!
      $password: String!
      $confirmPassword: String!
   ) {
      register(
         registerInput: {
            username: $username
            email: $email
            password: $password
            confirmPassword: $confirmPassword
         }
      ) {
         id
         email
         username
         createdAt
         token
      }
   }
`;

export default RegisterForm;
