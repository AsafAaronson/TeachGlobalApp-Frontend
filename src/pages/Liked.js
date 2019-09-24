import React, { Component } from "react";
import CardContainerHeader from "../components/CardContainerHeader"; //Props: type ("Workpage/Activity"), count (num), size ("S/-")
import CardContainer from "../components/CardContainer"; //props: type("Workpage"/-), data{cardContent, userLiked}

//props: data {cardsContent {both}, userLiked}

class Liked extends Component {
    constructor(props) {
        super(props);
        this.handleChangeAct = this.handleChangeAct.bind(this);
        this.handleChangeWor = this.handleChangeWor.bind(this);
        this.state = {searchAct:"", searchWor:""};
    }
    
    raiseLike = id => {
        console.log(`Activity comp raised like: ${id}`);
        this.props.raiseLike(id);
    };

    filterCardsContentByLikes = (rawContent, liked) => {
        const filteredContent = rawContent.filter(el => liked.includes(el.id));
        return {
            cardsContent: filteredContent,
            userLiked: liked
        };
    };

    handleChangeAct = event => {
        this.setState({ searchAct: event.target.value });
    };

    handleChangeWor = event => {
        this.setState({ searchWor: event.target.value });
    };

    filterCardsContentBySearch = (array, searchKey) => {
        return array.filter(
            el =>
                el.title
                    .toLowerCase()
                    .includes(searchKey.toLocaleLowerCase()) ||
                el.description
                    .toLowerCase()
                    .includes(searchKey.toLocaleLowerCase())
        );
    };

    render() {
        let LikeFilteredContentAct = this.filterCardsContentByLikes(this.props.data.cardsContent.activities,this.props.data.userLiked);
        let LikeFilteredContentWor = this.filterCardsContentByLikes(this.props.data.cardsContent.workpages,this.props.data.userLiked);
        let searchFilteredContentAct = this.filterCardsContentBySearch(LikeFilteredContentAct.cardsContent,this.state.searchAct);
        let searchFilteredContentWor = this.filterCardsContentBySearch(LikeFilteredContentWor.cardsContent,this.state.searchWor);
        return (
            <div className="justify-content-center">
                <h1 className="row m-2">My Likes</h1>
                <CardContainerHeader
                    count={searchFilteredContentAct.length}
                    type="Activity"
                    size="S"
                    searchValue={this.state.searchAct}
                    raiseChange={this.handleChangeAct}
                />
                <CardContainer
                    data={{cardsContent:searchFilteredContentAct,userLiked:this.props.userLiked}}
                    raiseLike={id => this.raiseLike(id)}
                />
                <CardContainerHeader
                    count={searchFilteredContentWor.length}
                    type="Workpage"
                    size="S"
                    searchValue={this.state.searchWor}
                    raiseChange={this.handleChangeWor}
                />
                <CardContainer
                    data={{cardsContent:searchFilteredContentWor,userLiked:this.props.userLiked}}
                    type="Workpage"
                    raiseLike={id => this.raiseLike(id)}
                />
            </div>
        );
    }
}

export default Liked;
