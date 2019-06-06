import React, { Component } from 'react';

class InputField extends Component {
    render() { 
        return ( 
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">{this.props.type}</span>
                </div>
                <input size="1" type="text" className="form-control" placeholder={this.props.placeholder} aria-label={this.props.type}/>
            </div>
         );
    }
}
 
export default InputField;