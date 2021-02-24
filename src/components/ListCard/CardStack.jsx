import React, { Component } from "react";
import ListCard from './ListCard'

//props: cardContent

class CardStack extends Component {
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center justify-content-md-start">
                    {this.props.cardContent.map(card => (
                        <ListCard 
                            id={card.id} 
                            type={card.type} 
                            title={card.title} 
                            description={card.description} 
                            isLiked={card.isLiked} 
                            imgUrl={card.imgUrl} 
                        />
                    ))}
                </div>
            </div>
        );
    }
}
export default CardStack;
