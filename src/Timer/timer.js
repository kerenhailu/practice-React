import { render } from "@testing-library/react";
import React from "react";

class Timer extends React.Component {
  constructor(props) {
    // לא חייב לרשום סופר
    super(props);
    this.state = { second: 0, text: "" };
    this.secondUp = this.secondUp.bind(this);
    this.secondDwon = this.secondDwon.bind(this);
    this.Reset = this.Reset.bind(this);
    this.keren = this.keren.bind(this);
  }
  secondUp() {
    const nextSecond = this.state.second + 1;
    this.setState({ second: nextSecond });
  }
  secondDwon() {
    const minusSecond = this.state.second - 1;
    this.setState({ second: minusSecond });
  }
  Reset() {
    const reset = 0;
    this.setState({ second: reset });
  }
  keren(event) {
    console.log(event.target.value);
    const t = event.target.value;
    this.setState = ({ text: t });
  }
  render() {
    return (
      <div>
        <h1>{this.state.second}</h1>
        <button onClick={this.secondUp}>Increase</button>
        <button onClick={this.secondDwon}>minus</button>
        <button onClick={this.Reset}>Reset</button>
        <br></br>
        <input onChange={this.keren} ></input>
        <br></br>
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}
export default Timer;
