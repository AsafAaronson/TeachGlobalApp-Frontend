import React from 'react';

const VerticalProblem = function(props) {
    return (
        <div className='col text-right'>
            <h3>{`${props.numbers[0]}`}</h3>
            <h3>{`${props.type}`}</h3>
            <h3>{`${props.numbers[1]}`}</h3>
            <h3>{`______`}</h3>
        </div>
        
    );
}

export default VerticalProblem;