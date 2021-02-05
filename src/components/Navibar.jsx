import React, { useState } from "react";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";
import AuthNav from "./auth-nav";

function Navibar(props) {
  const [lModalShow, lSetModalShow] = useState(false);

  function defineModal(event) {
    lSetModalShow(true);
  }

  if (props.isLoading) {
    return <div>Loading...</div>;
  }
  if (props.error) {
    return <div>Oops... {props.error.message}</div>;
  } else {
    return (
      <div style={{ width: "100vw", paddingRight: "0" }}>
        <header>
          <nav>
            <div className="menu-icon">
              <i className="fa fa-bars fa-2x"></i>
            </div>
            <div className="menu">
              <ul>
                <li
                  style={{ fontSize: "1.8vw", color: "#0CF2B1" }}
                  type="button"
                >
                  <AuthNav />
                </li>
                <li
                  style={{ fontSize: "1.8vw", color: "#0CF2B1" }}
                  type="button"
                ></li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/comp1">Link1</Link>
                </li>
                <li>
                  <Link to="/comp2">Link2</Link>
                </li>
                <li>
                  <Link to="/comp3">Link3</Link>
                </li>
                <li>
                  <Link to="/comp4">Link4</Link>
                </li>
                <li>
                  <Link style={{ paddingRight: "0" }} to="/comp5">
                    Link5
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <LoginModal
          show={lModalShow}
          onHide={() => lSetModalShow(false)}
          mshow={lModalShow}
        />
      </div>
    );
  }
}

export default Navibar;
