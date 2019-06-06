import React, { Component } from "react";
import OneLineProblem from "../components/Generator/OneLineProblem";
import VerticalProblem from "../components/Generator/VerticalProblem";
import InputField from "../components/InputField";

class GeneratorPage extends Component {
    constructor(props) {
        super(props);
        this.amount = 20;
        this.maxLimit = 200;
        this.minLimit = 50;
        this.type = "vertical";
        this.arithmetic = "+";
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
                this.arithmetic === "-" || this.arithmetic === "%"
                    ? randNum
                    : this.maxLimit
            )
        ];
    };

    generatePageContent = () => {
        let content = [];
        for (let i = 0; i < this.amount; i += 1) {
            let pair = this.getRandomPair();
            while (content.includes(pair)) {
                pair = this.getRandomPair();
            }
            content.push(pair);
        }
        return content;
    };

    render() {
        return (
            <div className="container-fluid text-center">
                <div className="col col-md-10 offset-md-1">
                    <div className="row justify-content-center mb-4">
                        <h1>Math Workpage</h1>
                    </div>
                    <div className="row justify-content-center mb-4">
                        <div className="jumbotron jumbotron-fluid bg-light rounded">
                            <div className="container">
                                <h2 className="display-4">Customize</h2>
                                <div className="row">
                                    <div className="col">
                                        <InputField type="Minimum" placeholder="0" />
                                    </div>
                                    <div className="col">
                                        <InputField type="Maximum" placeholder="10" />
                                    </div>
                                    <div className="col">
                                        <InputField type="Amount" placeholder="12" />
                                    </div>
                                    <div className="col">
                                        <div class="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" for="inputGroupSelect">Arithmetic</span>
                                            </div>
                                            <select class="custom-select" id="inputGroupSelect">
                                                <option selected value="+">+</option>
                                                <option value="-">-</option>
                                                <option value="x">x</option>
                                                <option value="%">%</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        {this.generatePageContent().map(pair =>
                            this.type === "vertical" ? (
                                <VerticalProblem
                                    numbers={pair}
                                    arithmetic={this.arithmetic}
                                />
                            ) : (
                                <OneLineProblem
                                    numbers={pair}
                                    arithmetic={this.arithmetic}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default GeneratorPage;
