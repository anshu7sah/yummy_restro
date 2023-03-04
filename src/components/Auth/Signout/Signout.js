import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

const Signout = () => {
  const { logout } = useAuth0();
  useEffect(() => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return <></>;
};

export default Signout;
