import React, { Component } from "react";
import PropTypes from 'prop-types';


export class Card extends Component {

  render() {
    const {name, image, id} = this.props;

    return (
      <div className="card" 
          onClick={() => this.props.cardClick(id)}  
          style={getStyle_Card}>
        <div className="img-container" style={getStyle_ImgContainer}>
          <img alt={name} src={image} style={getStyle_Img}/>
        </div>
      </div>
    );
  }
}
// PropTypes // not sure it's needed
Card.propTypes = {
  card: PropTypes.object.isRequired
}

const getStyle_Card = {
  background: "#fff",
  borderRadius: "2px",
  height: "250px",
  margin: "1rem",
  position: "relative",
  width: "325px",
  boxShadow: "0 3px 6px #999, 0 3px 6px #999",
  textAlign: "left",
  paddingLeft: "1rem",
  paddingRight: "1rem",
}

const getStyle_ImgContainer = {     
  height: "100%",
  overflow: "hidden",
  textAlign: "center",
  background: "#999",
}

const getStyle_Img = {     
  wirth: "60%",
}

export default Card;
