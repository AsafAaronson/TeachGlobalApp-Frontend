import React, { Component } from "react";

//props: title, name, options (array of strings), value, raiseInputChange

class ChoiceField extends Component {
    onChange = e => {
        this.props.raiseInputChange(e);
    };

    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">{this.props.title}</span>
                </div>
                <select
                    value={this.props.value}
                    name={this.props.name}
                    className="custom-select"
                    onChange={event => this.onChange(event)}
                >
                    {this.props.options.map(opt => (
                        <option value={opt}>{opt}</option>
                    ))}
                </select>
            </div>
        );
    }
}

export default ChoiceField;
