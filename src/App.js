import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import cards from "./cards.json";
import Card from "./components/Card"; 

import './App.css';

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  setGameComplete = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.used = false;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  cardClick = id => {
    this.state.cards.find((clickedCard, i) => {
      if (clickedCard.id === id) {
        if (clickedCard.used) {
          this.setGameComplete(); // game over
        } else {
          clickedCard.used = true;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        }
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header score={this.state.score} highscore={this.state.highscore} />
            <Route exact path="/" render={props => (
              <React.Fragment>

                {this.state.cards.map(card => (
                  <Card
                    cardClick={this.cardClick}
                    id={card.id}
                    key={card.id}
                    image={card.image}
                  />
                ))}
                
              </React.Fragment>
            )} 
            />
            <Route path="/about" component={About} />
          </div>   
        </div>
      </Router>
    );
  }
}

export default App;
