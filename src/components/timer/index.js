import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {
  state = {
    time: 0,
    isStopped: false,
  };
  componentDidMount = () => {
    this.timer(this.props.initial);
  };
  timer = (time) => {
    this.setState({ time });
    return setInterval(() => {
      if (this.state.isStopped === true) return;
      return this.setState(
        this.state.time !== 0 ? { time: this.state.time - 1 } : { time: 0 }
      );
    }, 1000);
  };

  stopTime = () => {
    let currentTime = this.state.time;
    this.setState({ time: currentTime, isStopped: true });
  };

  render() {
    let { time } = this.state;
    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
        <div className="timer-value" data-testid="timer-value">
          {time}
        </div>
        <button
          className="large"
          data-testid="stop-button"
          onClick={this.stopTime}
        >
          Stop Timer
        </button>
      </div>
    );
  }
}
