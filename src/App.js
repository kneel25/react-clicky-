import React, { Component } from 'react';
import ToonCard from "./components/ToonCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import toons from "./toons.json";
import './App.css';

class App extends Component {

state = {
  toons,
  score: 0,
  highscore: 0
};

gameOver = () => {
  
  if (this.state.score > this.state.highscore) {
    this.setState({highscore: this.state.score}, function() {
      console.log("thisis the high score" + this.state.highscore);
    });
  }
  this.setState({score: 0 });
  this.state.toons.forEach(toon => {
    toon.count = 0;
  });
  
}

//_________________________________________________________
clickCount = id => {
  // console.log("did it click?");

  this.state.toons.map((object, i) => {
    if (object.id === id) {
      // console.log(object.id)

      if(toons[i].count === 0){
        toons[i].count = toons[i].count + 1;
        this.setState({score : this.state.score + 1});
          
      


        //shake
        this.state.toons.sort(() => Math.random() - 0.5)
        return true; 
      } else {
        this.gameOver();
        // return false;
      }
    }
    return true;
  });
}
//________________________________________________________________

  render() {
    console.log("this is the score " + this.state.score);
    return (
     
      <Wrapper>
      <Title score={this.state.score} highscore={this.state.highscore}>Looney Tunes</Title>

        {this.state.toons.map(toon => (
          <ToonCard
            clickCount={this.clickCount}
            id={toon.id}  
            key={toon.id}
            name={toon.name}
            image={toon.image}
            
          />
        ))}
      </Wrapper>

    );
  }
}

export default App;
