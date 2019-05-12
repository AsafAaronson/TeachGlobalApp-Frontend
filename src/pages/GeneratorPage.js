import React, { Component } from "react";
import OneLineProblem from "../components/Generator/OneLineProblem";
import VerticalProblem from "../components/Generator/VerticalProblem";

class GeneratorPage extends Component {
    constructor(props) {
        super(props);
        this.maxLimit = this.props.maxLimit;
        this.minLimit = this.props.minLimit;
        this.type = this.props.type;
    }

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    };

    getRandomPair = () => {
        const randNum = this.getRandomNumber(this.minLimit, this.maxLimit);
        return [
            randNum,
            this.getRandomNumber(
                this.minLimit,
                this.type === "-" || this.type === "%" ? randNum : this.maxLimit
            )
        ];
    };

    generatePageContent = () => {
        let content = [];
        for (let i = 0; i < this.props.amount; i += 1) {
            let pair = this.getRandomPair();
            while (content.includes(pair)) {
                pair = this.getRandomNumber();
            }
            content.push(pair);
        }
        return content;
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-start m-3">
                    {this.generatePageContent().map(pair => <OneLineProblem numbers={pair} type={this.type} />)}
                    {this.generatePageContent().map(pair => <VerticalProblem numbers={pair} type={this.type} />)}
                </div>
            </div>
        );
    }
}

export default GeneratorPage;
