import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../redux/counter';
import {todosSelectors} from '../redux/todos';

function CounterButton({ clicks, onClick }) {
    return (
        <div>
            <button type="button" onClick={ onClick } >Clicked {clicks} times</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    clicks: todosSelectors.getClicks(state),
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(increment())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton)