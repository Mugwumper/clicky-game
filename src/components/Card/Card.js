import React, { Component } from "react";
import "./Card.css";

export class Card extends Component {
  render() {
    const {name, image, id} = this.props;
    return (
      <div className="card" onClick={() => this.props.cardClick(id)}>
        <div className="img-container">
          <img alt={name} src={image} />
        </div>
      </div>
    );
  }
}


export default Card;
