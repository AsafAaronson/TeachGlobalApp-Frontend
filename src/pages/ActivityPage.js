import React, { Component } from "react";
import Card from "../components/Card";
import PageHeaderCard from "../components/PageHeaderCard";

//props: activity:{id, title, content:{goals, accesories, todo, dothis, adapt, additionalPages}, isLiked}, raiseLike

class ActivityPage extends Component {
    renderList = (content, iconType = "fa fa-chevron-right") => {
        return content.map(el => (
            <p>
                <i class={iconType} />
                {" " + el}
            </p>
        ));
    };

    raiseLike = id => {
        this.props.raiseLike(id);
    };

    render() {
        return (
            <div className="container p-2">
                {/* Page Header */}
                <PageHeaderCard
                    text={this.props.activity.title}
                    id={this.props.activity.id}
                    isLiked={this.props.activity.isLiked}
                    parentLink="/activities"
                    raiseLike= {id => this.raiseLike(id)}
                />
                {/* Goals Row */}
                <div className="row justify-content-center">
                    <div className="col col-md-10 col-lg-8">
                        <Card
                            title="Goals"
                            description={this.renderList(
                                this.props.activity.content.goals,
                                "fa fa-circle-thin"
                            )}
                        />
                    </div>
                </div>
                {/* Accesories and Todo Row */}
                <div className="row justify-content-center">
                    <div className="col col-md-5 col-lg-4">
                        <Card
                            title="Accesories"
                            description={this.renderList(
                                this.props.activity.content.accesories,
                                "fa fa-bolt"
                            )}
                        />
                    </div>
                    <div className="col col-md-5 col-lg-4">
                        <Card
                            title="To Do List"
                            description={this.renderList(
                                this.props.activity.content.todolist
                            )}
                        />
                    </div>
                </div>
                {/* Lets do this Row */}
                <div className="row justify-content-center">
                    <div className="col col-md-10 col-lg-8">
                        <Card
                            title="Let's Do this!"
                            description={this.renderList(
                                this.props.activity.content.dothis
                            )}
                        />
                    </div>
                </div>
                {/* Adapt Row */}
                <div className="row justify-content-center">
                    <div className="col col-md-10 col-lg-8">
                        <Card
                            title="Adapt"
                            description={this.props.activity.content.adapt}
                        />
                    </div>
                </div>
                {/* Additional Pages */}
                {this.props.activity.content.additionalPages.map(url => (
                    <div className="row justify-content-center">
                        <div className="col col-md-10 col-lg-8 text-center">
                            <div className="card shadow-sm text-center">
                                <div className="card-body">
                                    <img
                                        src={url}
                                        alt={this.props.activity.title}
                                        className="img-fluid rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}          
                {/* Footer */}
                <div className="row justify-content-center">
                    <h2>Good Luck!</h2>
                </div>
            </div>
        );
    }
}

export default ActivityPage;
