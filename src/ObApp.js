import React from "react";

class ObApp extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: "false",
    };
  }
  render() {
    let wordDisplay;
    if (this.state.isLoggedIn) {
      wordDisplay = "in";
    } else {
      wordDisplay = "out";
    }
    return (
      <div>
        <h1>You are current logged {wordDisplay}</h1>
      </div>
    );
  }
}

export default ObApp;
