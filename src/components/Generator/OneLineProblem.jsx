import React from "react";

const OneLineProblem = function(props) {
    return (
        <div className='col col-2 text-end'>
            <h3>{`${props.numbers[0]} ${props.type} ${props.numbers[1]} = `}</h3>
        </div>
    );
}

export default OneLineProblem;