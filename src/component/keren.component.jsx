import React from "react";
class Keren extends React.Component {
  constructor(props) {
    super(props);
    this.state = { privateName: "" };
    this.title = this.title.bind(this);
  }
  title(event) {
    const text = event.target.value;
    this.setState({ privateName: text });
  }
  
  render() {
    return (
      <div>
        <h1>name : {this.state.privateName}</h1>
        <input onChange={this.title}></input>
      </div>
    );
  }
}

export default Keren;
