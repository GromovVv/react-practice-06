// import { Component } from 'react';
import { connect } from 'react-redux'

import Value from './Value'
import Controls from './Controls'
import * as actions from '../../redux/counter/counter-actions'

import "./Counter.css"


import React from 'react';

function Counter({ value, step, onIncrement, onDecrement }) {
    return (
        <div className="Counter">
           <Value value={value} />

            <Controls 
            step={step}
            onIncrement={ () => onIncrement(step)}
            onDecrement={ () => onDecrement(step)}
            /> 
        </div>
    );
};

const mapStateToProps = state => ({
    value: state.counter.value,
    step: state.counter.step,
})

const mapDispatchToProps = dispatch => ({
    onIncrement: (value) => dispatch(actions.increment(value)),
    onDecrement: (value) => dispatch(actions.decrement(value))
})

export default connect( mapStateToProps, mapDispatchToProps )(Counter);

// const a = (x) => (y) => x + y;
// a(2)(3)

// const a = (x) => {
//     return y => {
//         return x + y;
//     }
// }

// class Counter extends Component {
//     // static defaultProps = {
//     //     initialValue: 0,
//     // }

//     // state = {
//     //     value: this.props.initialValue,
//     // }

//     // handleIncrement = () => {
//     //     this.setState(({ value }) => ({
//     //         value: value + 1
//     //     }))
//     // }

//     // hadleDecrement = () => {
//     //     this.setState(({ value }) => ({
//     //         value: value - 1
//     //     }))
//     // }

//     render() {
//         // const { value } = this.state;

//         return (
//             <div className="Counter">
//                <Value value={value} />

//                 <Controls 
//                 onIncrement={this.handleIncrement}
//                 onDecrement={this.hadleDecrement}
//                 /> 
//             </div>
//         );
//     }
    
// };

// export default Counter;