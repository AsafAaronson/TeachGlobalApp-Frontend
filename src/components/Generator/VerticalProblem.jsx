import React from 'react';

const VerticalProblem = function(props) {
    return (
        <div className='col col-4 col-sm-3 col-lg-2  mr-1 text-right'>
            <h3>{`${props.numbers[0]}`}</h3>
            <h3>{`${props.arithmetic}`}</h3>
            <h3>{`${props.numbers[1]}`}</h3>
            <h3>{`______`}</h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        
    );
}

export default VerticalProblem;