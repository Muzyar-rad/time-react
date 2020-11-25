import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {
  state = {
    time: 0,
  };
  componentDidMount() {
    this.timer(this.props.initial);
    window.location = "/";
  }
  timer = (time) => {
    for (let i = time; i > -1; i--) {
      this.setState({ time: i });
    }
  };
  render() {
    let { time } = this.state;
    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
        <div className="timer-value" data-testid="timer-value">
          {time}
        </div>
        <button className="large" data-testid="stop-button">
          Stop Timer
        </button>
      </div>
    );
  }
}
