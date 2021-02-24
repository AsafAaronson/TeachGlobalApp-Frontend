import React, { Component } from 'react';
import Card from "../components/ListCard/Card";
import LikeButton from "../components/ListCard/LikeButton";
import { LikeHandlerContext } from "../contexts/LikeHandler";

//props:
//id : number , date: (date), creator: (str),
// title: (str), tags: (["str","str"]), goals: (["str", "str"]),
// accesories: (["str", "str"]),todolist: (["str", "str"]),
// dothis: (["str", "str"]) ,adapt: "str", additionalPages : ["ref","ref"]

class ActivityPage extends Component {
    static contextType = LikeHandlerContext;

    isLiked = () => this.context.assignLike(this.props.id) 
    render() { 
        return ( 
            <div className="col-10 col-md-8 mx-auto">
                <Card>
                    {/*  like button, back button, date, creator, tags(folding) */}
                    <div className="row">
                        <div className="col-4 my-auto">
                            <button className="btn btn-secondary mx-3">
                                <i class="fa fa-arrow-left" />
                            </button>
                            <LikeButton
                                id={this.props.id}
                                isLiked={this.isLiked()}
                            />
                        </div>
                        <div className="col-4 my-auto">
                            <h1 className="text-center">
                                {this.props.title}
                            </h1>
                        </div>
                        <div className="col-4">
                            <span>{this.props.creator}</span>
                            <br />
                            <span>{this.props.date}</span>
                        </div>
                    </div>
                </Card>
            </div>
         );
    }
}
 
export default ActivityPage;

// const ActivityPage = props => {
//     return (
//         // <LikeHandlerContext.Consumer>
//             // {({ assignLike }) => {
//             //     let isLiked = assignLike(props.id);
//             //     return
//                 (
//                     <div className="col-10 col-md-8 mx-auto">
//                         <Card>
//                             {/*  like button, back button, date, creator, tags(folding) */}
//                             <div className="row">
//                                 <div className="col-4 my-auto">
//                                     <button className="btn btn-secondary mx-3">
//                                         <i class="fa fa-arrow-left" />
//                                     </button>
//                                     <LikeButton
//                                         id={props.id}
//                                         isLiked={props.isLiked}
//                                     />
//                                 </div>
//                                 <div className="col-4 my-auto">
//                                     <h1 className="text-center">
//                                         {props.title}
//                                     </h1>
//                                 </div>
//                                 <div className="col-4">
//                                     <span>{props.creator}</span>
//                                     <br />
//                                     <span>{props.date}</span>
//                                 </div>
//                             </div>
//                         </Card>
//                     </div>
//                 )
//             // }}
//             // ;
//         // </LikeHandlerContext.Consumer>
//     );
// };

// export default ActivityPage;
