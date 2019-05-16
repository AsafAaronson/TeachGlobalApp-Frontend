import React, { Component } from "react";

//Props: type ("Workpage/Activity"), count (num), size ("S/-")

class CardContainerHeader extends Component {
    renderDataByType = () => {
        if (this.props.count === 1) {
            return this.props.type;
        } else {
            return this.props.type === "Workpage" ? "Workpages" : "Activities";
        }
    };

    headerContent = () => {
        return (
            <div>
                <span class="badge badge-secondary">{this.props.count}</span>{" "}
                {this.renderDataByType()}:
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
