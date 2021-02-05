import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogIn } from "react-icons/fi";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <FiLogIn className="auth-buttons" onClick={() => loginWithRedirect()} />;
};

export default LoginButton;