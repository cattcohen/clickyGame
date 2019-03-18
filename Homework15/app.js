

import React, { Component } from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import bobsburgers from "./bobsburgers.json";
import "./App.css";

class App extends Component {
  state = {
    bobsburgers,
    clickedBurgers: [],
    score: 0
  };

  imageClick = event => {
    const currentCharacter = event.target.addEventListener;
    const characterClicked =
      this.state.clickedBurgers.indexOf(currentCharacter) > -1;

  if (characterClicked) {
    this.setState({
      bobsburgers: this.state.fish.sort(function(a,b) {
        return 0.5 - Math.random();
      }),
      clickedBurgers: [],
      score: 0
    });
      alert("You lost sucka! Play again?");
  } else {
    this.setState(
      {
        bobsburgers: this.state.fish.sort(function(a,b) {
          return 0.5 - Math.random();
        }),
        clickedBurgers: this.state.clickedBurgers.concat(
          currentCharacter
        ),
        score: this.state.score + 1
      },
      () => {
        if (this.state.score === 15) {
          alert("Congrats! You've won!");
          this.setState({
            bobsburgers: this.state.bobsburgers.sort(function(a,b) {
              return 0.5 - Math.random();
            }),
            clickedBurgers: [],
            score: 0
          });
        }
      }
    );
  }
  };
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.bobsburgers.map(fish => (
            <FriendCard
              imageClick={this.imageClick}
              id={bobsburgers.id}
              key={bobsburgers.id}
              image={bobsburgers.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;