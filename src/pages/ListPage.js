import React, { Component } from "react";
import SearchHeader from "../components/ListCard/SearchHeader";
import CardStack from "../components/ListCard/CardStack";
import { activities, workpages, users } from "../database";
import { TagsContext } from "../contexts/TagsContext";

// props: type ( 'Activity'/'Workpage'), totalCount

class ListPage extends Component {
    constructor(props) {
        super(props);
        this.amount = 10;
        this.state = {
            currentTags: [],
            searchValue: "",
            cardContent: []
        };
    }

    ////// Event Handlers to update state
    changeSearchValue = e => {
        this.setState({ searchValue: e.target.value });
    };

    handleEnter = () => {
        if (!this.state.currentTags.includes(this.state.searchValue)) {
            this.setState({
                currentTags: [...this.state.currentTags, this.state.searchValue]
            });
        }
        this.setState({ searchValue: "" });
    };

    handleX = text => {
        let arr = this.state.currentTags.slice();
        arr = arr.filter(el => !(el === text));
        this.setState({ currentTags: arr });
    };

    ////// API calls to hydrate Card Content according to state
    initialCardContent = () => {
        //API call to search for cards that are most recent
        let initialCardContent =
            this.props.type == "Activity" ? activities : workpages;
        //API Call

        this.setState({ cardContent: initialCardContent });
    };

    searchedCardsContent = (searchValue, currentTags, amount) => {
        //API call to search for cards that include tag for tag in currentTags and searchValue
        const contentFound = [];
    };

    componentDidMount = () => {
        this.initialCardContent();
    };

    componentDidUpdate = () => {
        if (this.state.searchValue == "" && this.state.currentTags == []) {
            this.initialCardContent();
        } else {
            this.searchedCardsContent(
                this.state.searchValue,
                this.state.currentTags,
                this.amount
            );
        }
    };

    render() {
        return (
            <div>
                <TagsContext.Provider
                    value={{
                        raiseEnter: this.handleEnter,
                        raiseX: this.handleX
                    }}
                >
                    <SearchHeader
                        title={this.props.type}
                        count={this.state.cardContent.length}
                        totalCount={this.props.totalCount}
                        searchValue={this.state.searchValue}
                        currentTags={this.state.currentTags}
                        raiseChange={this.changeSearchValue}
                    />
                </TagsContext.Provider>
                <CardStack cardContent={this.state.cardContent} />
            </div>
        );
    }
}

export default ListPage;
