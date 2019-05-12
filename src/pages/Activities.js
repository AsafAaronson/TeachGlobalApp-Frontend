import React, { Component } from "react";
import PageHeader from "../components/PageHeader"; //Props: type ("Workpage/Activity"), count (num), size ("S/-")
import CardContainer from "../components/CardContainer"; //props: type("Workpage"/-), data{cardContent, userLiked}

//props: data {cardsContent, userLiked}

class Activities extends Component {
    raiseLike = id => {
        console.log(`Activity comp raised like: ${id}`);
        this.props.raiseLike(id);
    };

    render() {
        return (
            <div>
                <PageHeader
                    count={this.props.data.cardsContent.length}
                    type="Activity"
                />
                <CardContainer
                    data={this.props.data}
                    raiseLike={id => this.raiseLike(id)}
                />
            </div>
        );
    }
}

export default Activities;
