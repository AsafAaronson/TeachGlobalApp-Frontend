import React, { Component } from "react";
import Tag from "./Tag";
import { TagsContext } from "../../contexts/TagsContext";

//Props: title ("Workpage/Activity"), count (num), size ("S/-"), searchValue, currentTags raiseChange, raiseEnter

class SearchHeader extends Component {
    static contextType = TagsContext;
    
    onChange = e => {
        this.props.raiseChange(e);
    };

    onKeyPress = e => {
        if (e.key === "Enter") {
            this.context.raiseEnter();
        }
    };

    renderTitle = () => {
        if (this.props.count === 1) {
            return this.props.title;
        } else {
            return this.props.title === "Workpage" ? "Workpages" : "Activities";
        }
    };

    renderTags = () => this.props.currentTags.map(el => <Tag text={el} />);

    headerContent = () => {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        {this.renderTitle()}:{" "}
                        <input
                            style={{
                                border: "1px solid #248f8f",
                                "border-radius": "5px",
                                "font-family": "arial"
                            }}
                            size="10"
                            className="form"
                            placeholder=" Search"
                            type="text"
                            name="SearchField"
                            value={this.props.searchValue}
                            onChange={event => this.onChange(event)}
                            onKeyPress={event => this.onKeyPress(event)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Showing{" "}
                        <span class="badge badge-secondary">
                            {this.props.count}
                        </span>
                        {" of "}
                        <span class="badge badge-secondary">
                            {this.props.totalCount}
                        </span>{" "}
                        {this.renderTags()}
                    </div>
                </div>
            </div>
        );
    };

    renderSize = () => {
        if (this.props.size === "S") {
            return <h3>{this.headerContent()}</h3>;
        } else {
            return <h1>{this.headerContent()}</h1>;
        }
    };

    render() {
        return <div className="row m-2 pl-3">{this.renderSize()}</div>;
    }
}

export default SearchHeader;
