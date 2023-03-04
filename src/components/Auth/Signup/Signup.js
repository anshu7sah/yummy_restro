import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

const Signup = () => {
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  return <></>;
};

export default Signup;
