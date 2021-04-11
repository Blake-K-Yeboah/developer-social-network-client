// Routing Stuff
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Authentication Context Provider
import { AuthProvider } from "./context/auth";

// Auth Route Utility
import AuthRoute from "./util/AuthRoute";

// Pages
import Home from "./pages/Home";
import Register from "./pages/Register";

// Material UI Theme Function
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// Styling
import "./App.css";

// Theme
const theme = createMuiTheme({
   palette: {
      type: "dark",
   },
});

function App() {
   return (
      <AuthProvider>
         <Router>
            <Switch>
               <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Route exact path="/" component={Home} />
                  <AuthRoute exact path="/register" component={Register} />
               </ThemeProvider>
            </Switch>
         </Router>
      </AuthProvider>
   );
}

export default App;
