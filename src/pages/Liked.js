import React, { Component } from "react";
import CardContainerHeader from "../components/CardContainerHeader"; //Props: type ("Workpage/Activity"), count (num), size ("S/-")
import CardContainer from "../components/CardContainer"; //props: type("Workpage"/-), data{cardContent, userLiked}

//props: data {cardsContent {both}, userLiked}

class Liked extends Component {
    raiseLike = id => {
        console.log(`Activity comp raised like: ${id}`);
        this.props.raiseLike(id);
    };

    filterLikedContent = (rawContent, liked) => {
        const filteredContent = rawContent.filter(el => liked.includes(el.id));
        return {
            cardsContent: filteredContent,
            userLiked: liked
        };
    };

    render() {
        return (
            <div>
                <h1 className="row m-2">My Likes</h1>
                <CardContainerHeader
                    count={
                        this.filterLikedContent(
                            this.props.data.cardsContent.activities,
                            this.props.data.userLiked
                        ).cardsContent.length
                    }
                    type="Activity"
                    size="S"
                />
                <CardContainer
                    data={this.filterLikedContent(
                        this.props.data.cardsContent.activities,

                        this.props.data.userLiked
                    )}
                    raiseLike={id => this.raiseLike(id)}
                />
                <CardContainerHeader
                    count={
                        this.filterLikedContent(
                            this.props.data.cardsContent.workpages,
                            this.props.data.userLiked
                        ).cardsContent.length
                    }
                    type="Workpage"
                    size="S"
                />
                <CardContainer
                    data={this.filterLikedContent(
                        this.props.data.cardsContent.workpages,
                        this.props.data.userLiked
                    )}
                    type="Workpage"
                    raiseLike={id => this.raiseLike(id)}
                />
            </div>
        );
    }
}

export default Liked;
