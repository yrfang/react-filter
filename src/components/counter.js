import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCount, decrementCount, resetCount } from '../store';

class Counter extends Component {
  
  increment = () => {
    this.props.incrementCount()
  }

  decrement = () => {
    this.props.decrementCount()
  }

  reset = () => {
    this.props.resetCount()
  }

  render() {
    const { count, incrementCount } = this.props
    
    return (
      <div>
        <h1>Count: <span>{count}</span></h1>
        <button onClick={incrementCount}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.get('count')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: bindActionCreators(incrementCount, dispatch),
    decrementCount: bindActionCreators(decrementCount, dispatch),
    resetCount: bindActionCreators(resetCount, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
