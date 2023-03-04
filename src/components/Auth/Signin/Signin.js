import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Signin = () => {
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    loginWithRedirect();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  return <></>;
};

export default Signin;
