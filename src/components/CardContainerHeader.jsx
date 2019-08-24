import React, { Component } from "react";

//Props: type ("Workpage/Activity"), count (num), size ("S/-"), searchValue, raiseChange

class CardContainerHeader extends Component {
    onChange = (e) => {
        this.props.raiseChange(e);
    }
    
    renderDataByType = () => {
        if (this.props.count === 1) {
            return this.props.type;
        } else {
            return this.props.type === "Workpage" ? "Workpages" : "Activities";
        }
    };

    headerContent = () => {
        return (
            <div className="row">
                <div className="col">
                    <span class="badge badge-secondary">{this.props.count}</span>{" "}
                    {this.renderDataByType()}:
                </div>
                <div className="col">
                    <input
                        style = {{"border":"1px solid #248f8f", "border-radius":"5px", "font-family":"arial"}}
                        size="10"
                        className="form"
                        placeholder=" Search"
                        type="text"
                        name= "SearchField"
                        value={this.props.searchValue}
                        onChange={(event) => this.onChange(event)}
                    />
                </div>
            </div>
        )
    } 

    renderDataBySize = () => {
        if (this.props.size === "S") {
            return <h3>{this.headerContent()}</h3>;
        } else {
            return <h1>{this.headerContent()}</h1>;
        }
    };

    render() {
        return (
            <div className="row m-2 pl-3">
                {this.renderDataBySize()}
            </div>
        );
    }
}

export default CardContainerHeader;
