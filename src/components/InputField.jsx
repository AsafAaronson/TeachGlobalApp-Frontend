import React, { Component } from "react";

//props: name, placeholder, value, raiseInputChange

class InputField extends Component {

    onChange = e => {
        this.props.raiseInputChange(e)
    }

    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                        {this.props.title}
                    </span>
                </div>
                <input
                    size="1"
                    className="form-control"
                    placeholder={this.props.placeholder}
                    aria-label={this.props.title}
                    type="text"
                    name={this.props.name}
                    value={this.props.value}
                    onChange={(event) => this.onChange(event)}
                    
                />
            </div>
        );
    }
}

export default InputField;
