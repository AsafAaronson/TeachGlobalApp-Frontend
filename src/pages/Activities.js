import React, { Component } from "react";
import CardContainerHeader from "../components/CardContainerHeader"; //Props: type ("Workpage/Activity"), count (num), size ("S/-")
import CardContainer from "../components/CardContainer"; //props: type("Workpage"/-), data{cardContent, userLiked}

//props: data {cardsContent}, raiseLike

class Activities extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {search: ""};
    }

    handleChange = event => {
        this.setState({ search: event.target.value });
    };

    filterCardsContent = array => {
        return array.filter(
            el =>
                el.title
                    .toLowerCase()
                    .includes(this.state.search.toLocaleLowerCase()) ||
                el.description
                    .toLowerCase()
                    .includes(this.state.search.toLocaleLowerCase())
        );
    };

    raiseLike = id => {
        this.props.raiseLike(id);
    };

    render() {
        let cardsContent = this.filterCardsContent(
            this.props.data.cardsContent
        );
        return (
            <div>
                <CardContainerHeader
                    count={cardsContent.length}
                    type="Activity"
                    searchValue={this.state.search}
                    raiseChange={this.handleChange}
                />
                <CardContainer
                    data={{cardsContent: cardsContent}}
                    raiseLike={id => this.raiseLike(id)}
                />
            </div>
        );
    }
}

export default Activities;
