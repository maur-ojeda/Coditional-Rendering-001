import React from "react";
import Conditional from "./Conditional";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  render() {
    return (
      <div>{this.state.isLoading ? <h1>Loading ...</h1> : <Conditional />}</div>
    );
  }
}
