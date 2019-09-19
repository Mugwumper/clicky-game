import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {
  render() {
    const { score, highscore } = this.props;
    return (
      <header style={headerStyle}>
        <h1>Clicky Game</h1>
        <Link style={linkStyle} to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          About
        </Link>
        <div className="scores" style={scoreboardStyle}>
          Score: {score} {" "} Highscore: {highscore}
        </div>
      </header>
    );
  }
}

const scoreboardStyle = {
  background: "#444"
};

const headerStyle = {
  background: "#0a0014",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};


export default Header;
