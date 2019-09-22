import React, { Component } from "react";
import { Link } from "react-router-dom";  

class Header extends Component {
  render() {
    const { score, highscore } = this.props;
    return (
      <header style={headerStyle}>
          <h1>A Walk in the Woods</h1>
          <h3>Don't look behind you as you pass through the spooky forest.</h3>
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
          <div>
            <p>Instructions: Click each image one time only. 
              A score of 12 means you have made it out of the spooky forest.
            </p>
          </div> 
      </header>
    );
  }
}

const scoreboardStyle = {
  margin: "6px",
  background: "#20076F",
  border: "2px solid #2A17CF"
};

const headerStyle = {
  fontFamily: "Palatino Linotype",
  textShadow: "2px 2px 2px #372AE8",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};


export default Header;
