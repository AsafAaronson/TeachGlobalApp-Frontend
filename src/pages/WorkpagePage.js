import React, { Component } from "react";
import PageHeaderCard from "../components/PageHeaderCard";
import Card from "../components/Card";

//props: workpage:{id, title, description, content:{picture}, isLiked}, raiseLike

class WorkpagePage extends Component {
    raiseLike = id => {
        this.props.raiseLike(id);
    };

    render() {
        return (
            <div className="container p-2">
                {/* Page Header */}
                <PageHeaderCard
                    text={this.props.workpage.title}
                    id={this.props.workpage.id}
                    isLiked={this.props.workpage.isLiked}
                    parentLink="/workpages"
                    raiseLike= {id => this.raiseLike(id)}
                />
                {/* Page Description */}
                <div className="row justify-content-center">
                    <div className="col col-md-10 col-lg-8 text-center">
                        <Card description={this.props.workpage.description} />
                    </div>
                </div>
                {/* Content Picture */}
                <div className="row justify-content-center">
                    <div className="col col-md-10 col-lg-8 text-center">
                        <div className="card shadow-sm text-center">
                            <div className="card-body">
                                <img
                                    src={this.props.workpage.content.imgUrl}
                                    alt={this.props.workpage.title}
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default WorkpagePage;
