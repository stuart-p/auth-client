import React from "react";
import "./App.css";
import { IonPhaser } from "@ion-phaser/react";
import { gameSceneConfig } from "./scenes/gameScene";

class App extends React.Component {
  state = {
    initialize: true,
    game: gameSceneConfig
  };
  render() {
    return (
      <div>
        <header>
          <h1>Game Test</h1>
        </header>
        <IonPhaser game={this.state.game} initialize={this.state.initialize} />
      </div>
    );
  }
}

export default App;
