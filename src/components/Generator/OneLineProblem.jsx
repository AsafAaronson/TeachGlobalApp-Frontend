import React from "react";

const OneLineProblem = function(props) {
    return (
        <div className='col col-6 col-sm-4 col-lg-3'>
            <h3>{`${props.numbers[0]} ${props.arithmetic} ${props.numbers[1]} = `}</h3>
            <br></br>
            <br></br>
        </div>
    );
}

export default OneLineProblem;