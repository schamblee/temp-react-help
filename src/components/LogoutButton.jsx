import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <FiLogOut className="auth-buttons" onClick={() => logout({ returnTo: window.location.origin })} />
    );
};

export default LogoutButton;