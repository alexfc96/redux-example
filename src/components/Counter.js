import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions/counter";

class Counter extends Component {
  render() {
    return (
      <div>
        Counter: {this.props.value}
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value,
  name: "hello",
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
