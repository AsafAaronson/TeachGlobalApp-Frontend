import React, { Component } from 'react';
import LikeButton from "../components/LikeButton";
import { Link } from "react-router-dom";

//props: text, id, parentLink, isLiked, raiseLike

class PageHeaderCard extends Component {
    raiseLike = id => {
        this.props.raiseLike(id);
    };
    
    render() { 
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col col-md-10 col-lg-8">
                        <div className="card shadow-sm text-center">
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col text-start">
                                        <Link to={this.props.parentLink}>
                                            <button className="btn btn-info">
                                                <i class="fa fa-arrow-left" /> Back
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="col text-end">
                                        <LikeButton
                                            raiseLike={id => this.raiseLike(id)}
                                            isLiked={this.props.isLiked}
                                            id={this.props.id}
                                        />
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <h1>
                                        {this.props.text}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PageHeaderCard;