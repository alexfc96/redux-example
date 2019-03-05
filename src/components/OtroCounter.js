import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/counter';

class OtroCounter extends Component {
  render() {
    return (
      <div>
        {this.props.value}
        <button onClick={this.props.increment}>increment</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});


export default connect(mapStateToProps, mapDispatchToProps)(OtroCounter);