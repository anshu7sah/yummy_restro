import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RoutesPage from "./components/Routes/RoutesPage";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { createUser } from "./api/user";
import { CLAIMS_URI } from "./config/Config";

function App() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const createUserHandler = async () => {
      if (isAuthenticated) {
        const loginCount = parseInt(user[`${CLAIMS_URI}/logins`]);
        console.log("user is authenticated", user);

        if (loginCount <= 1) {
          const token = await getAccessTokenSilently();

          const result = await createUser(user, token);
          console.log(result.data);
        } else {
          console.log("User already present in our system");
        }
      } else {
        console.log("User is not authenticated");
      }
    };
    createUserHandler();
  }, [isAuthenticated, getAccessTokenSilently, user]);

  const renderApp = () => {
    return <RoutesPage />;
  };
  return <div className="App">{renderApp()}</div>;
}

export default App;
