import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

const Signout = () => {
  const { logout } = useAuth0();
  useEffect(() => {
    logout();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps
  //   { logoutParams: { returnTo: window.location.origin } }
  return <></>;
};

export default Signout;
