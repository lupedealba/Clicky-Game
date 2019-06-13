import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import got from "./got.json";

//sets state to 0 or empty
class App extends Component {
  state = {
    got,
    clickedGot: [],
    score: 0
  };

//when you click on a card ... the Got is taken out of the array
  imageClick = event => {
    const currentGot = event.target.alt;
    const GotAlreadyClicked =
      this.state.clickedGot.indexOf(currentGot) > -1;

//if you click on a Got that has already been selected, the game is reset and cards reordered
    if (GotAlreadyClicked) {
      this.setState({
        got: this.state.got.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedGot: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available Got, your score is increased and cards reordered
    } else {
      this.setState(
        {
          got: this.state.got.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedGot: this.state.clickedGot.concat(
            currentGot
          ),
          score: this.state.score + 1
        },
//if you get all 12 got corrent you get a congrats message and the game resets
        () => {
          if (this.state.score === 12) {
            alert("CONGRATS! You Win!");
            this.setState({
              got: this.state.got.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedGot: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.got.map(got => (
            <FriendCard
              imageClick={this.imageClick}
              id={got.id}
              key={got.id}
              image={got.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;


