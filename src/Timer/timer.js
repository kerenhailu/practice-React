import { render } from "@testing-library/react";
import React from "react";

class Timer extends React.Component{
constructor(props){
    // לא חייב לרשום סופר
super(props);
this.state={second:0};
this.secondUp=this.secondUp.bind(this);
}
secondUp(){
    const nextSecond= this.state.second+1;
    this.setState({second:nextSecond})
}
render(){
    return <div>
        <h1>{this.state.second}</h1>
        <button onClick={this.secondUp}>Increase</button>
    </div>
}
}
export default Timer;