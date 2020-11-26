import React, { Component } from "react";
import "./index.css";

export default class Timer extends Component {
  state = {
    time: 0,
  };
  componentDidMount = () => {
    this.timer(5);
  };
  timer = (time) => {
    this.setState({ time });
    return setInterval(() => {
      return this.setState(
        this.state.time !== 0 ? { time: this.state.time - 1 } : { time: 0 }
      );
    }, 1000);
  };

  stopTime = () => {
    const id = this.timer(this.props.initial);
    console.log(id);
    clearInterval(id);
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
