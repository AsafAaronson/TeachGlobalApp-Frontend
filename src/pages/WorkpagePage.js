import React, { Component } from "react";
import Card from "../components/Card";
import LikeButton from "../components/LikeButton";
import { Link } from "react-router-dom";

//props: workpage:{id, title, description, content:{picture}, isLiked}, raiseLike

class WorkpagePage extends Component {
    raiseLike = id => {
        this.props.raiseLike(id);
    };

    render() {
        return (
            <div className="container p-2">
                {/* Page Header */}
                <div className="row justify-content-center">
                    <div className="col col-md-10 col-lg-8">
                        <div className="card shadow-sm text-center">
                            <div className="card-body">
                                <h1 className="card-title">
                                    {this.props.workpage.title}
                                </h1>
                                <LikeButton
                                    raiseLike={id => this.raiseLike(id)}
                                    isLiked={this.props.workpage.isLiked}
                                    id={this.props.workpage.id}
                                />
                                <Link to="/workpages">
                                    <button className="btn btn-info">
                                        <i class="fa fa-arrow-left" /> Back
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content Picture */}
                <div className="row justify-content-center">
                    <div className="col col-md-10 col-lg-8 text-center">
                        <img src={this.props.workpage.content.imgUrl} alt={this.props.workpage.title}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkpagePage;
