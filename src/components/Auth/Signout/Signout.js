import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import Spinner from "../../UI/Spinner/Spinner";

const Signout = () => {
  const { logout } = useAuth0();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    logout({ logoutParams: { returnTo: window.location.origin } });
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return <>{loading && <Spinner type={"clock"} />}</>;
};

export default Signout;
