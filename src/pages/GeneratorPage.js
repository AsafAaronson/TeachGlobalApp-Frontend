import React, { Component } from "react";
import OneLineProblem from "../components/Generator/OneLineProblem";
import VerticalProblem from "../components/Generator/VerticalProblem";
import InputField from "../components/InputField";
import ChoiceField from "../components/ChoiceField";

class GeneratorPage extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            amount: "",
            maxLimit: "",
            minLimit: "",
            type: "",
            arithmetic: "+",
            toPrint: (
                <h2>
                    Set Up your choice and click "Create" to get a randomly
                    generated workpage
                </h2>
            )
        };
    }

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    };

    getRandomPair = (min, max, isFirstGreater) => {
        const randNum1 = this.getRandomNumber(min, max);
        const randNum2 = this.getRandomNumber(min, max);
        if (isFirstGreater && randNum2 > randNum1) {
            return [randNum2, randNum1];
        }
        return [randNum1, randNum2];
    };

    isIncluded = (el, arr) => {
        let isTrue = false;
        arr.forEach(arrEl => {
            if (arrEl[0] === el[0] && arrEl[1] === el[1]) {
                isTrue = true;
            }
        });
        return isTrue;
    };

    generatePageContent = (min, max, amount, isFirstGreater) => {
        let content = [];
        let infinityCounter = 0;
        while (content.length < amount && infinityCounter < 10) {
            let pair = this.getRandomPair(min, max, isFirstGreater);
            if (this.isIncluded(pair, content)) {
                infinityCounter++;
            } else {
                content.push(pair);
                infinityCounter = 0;
            }
        }
        console.log(content);
        return content;
    };

    renderPageContent = (min, max, amount, arithmetic, type) => {
        const isFirstGreater = arithmetic === "-" || arithmetic === "%";
        const generated = this.generatePageContent(
            min,
            max,
            amount,
            isFirstGreater
        );
        const toRender = generated.map(pair =>
            type === "Vertical" ? (
                <VerticalProblem numbers={pair} arithmetic={arithmetic} />
            ) : (
                <OneLineProblem numbers={pair} arithmetic={arithmetic} />
            )
        );
        return toRender;
    };

    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    isLegal = (min, max, amount) => {
        const variables = { maxAmount: 100, sizeOfPair: 2 };
        if (
            min > max ||
            amount > variables.maxAmount ||
            (max - min) ** variables.sizeOfPair < amount
        ) {
            return false;
        }
        return true;
    };

    handleGenerate = () => {
        let content = "";
        const parameters = [
            Number(this.state.minLimit),
            Number(this.state.maxLimit),
            Number(this.state.amount),
            this.state.arithmetic,
            this.state.type
        ];
        // check if the state is legal
        content = this.isLegal(...parameters.slice(0, 3)) ? (
            this.renderPageContent(...parameters)
        ) : (
            <div>
            <h2>Something in your request was illegal</h2>
                <ul>
                    <li>Not enough possible combinations (range too big for amount)</li>
                    <li>Amount bigger than 100</li>
                    <li>Maximum is smaller than minimum</li>
                </ul>
            </div>
        );
        // render according to the rules
        this.setState({
            toPrint: content
        });
    };

    render() {
        return (
            <div className="container-fluid text-center">
                <div className="col col-md-10 offset-md-1">
                    <div className="row justify-content-center mb-4">
                        <h1>Math Workpage</h1>
                    </div>
                    {/* Set attributes card */}
                    <div className="row justify-content-center mb-4">
                        <div className="card bg-light">
                            <div className="container mt-2 mb-2">
                                <h2>Set Up Workpage</h2>
                                <form className="row justify-content-center">
                                    <div className="col col-8 col-sm-6 col-md-4 col-lg-3">
                                        <InputField
                                            title="Minimum"
                                            placeholder={0}
                                            name="minLimit"
                                            value={this.state.minLimit}
                                            raiseInputChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col col-8 col-sm-6 col-md-4 col-lg-3">
                                        <InputField
                                            title="Maximum"
                                            placeholder={10}
                                            name="maxLimit"
                                            value={this.state.maxLimit}
                                            raiseInputChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col col-8 col-sm-6 col-md-4 col-lg-3">
                                        <InputField
                                            title="Amount"
                                            placeholder={12}
                                            name="amount"
                                            value={this.state.amount}
                                            raiseInputChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col col-8 col-sm-6 col-md-4 col-lg-3">
                                        <ChoiceField
                                            title="Arithmetic"
                                            name="arithmetic"
                                            options={["+", "-", "x", "%"]}
                                            value={this.state.arithmetic}
                                            raiseInputChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="col col-8 col-sm-6 col-md-4 col-lg-3">
                                        <ChoiceField
                                            title="Type"
                                            name="type"
                                            options={["One Line", "Vertical"]}
                                            value={this.state.type}
                                            raiseInputChange={this.handleChange}
                                        />
                                    </div>
                                </form>
                                <div className="row justify-content-center">
                                    <button
                                        className="btn btn-info mr-3"
                                        onClick={() => this.handleGenerate()}
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Generated Math Problems Section*/}
                    <div className="row justify-content-start">
                        {this.state.toPrint}
                    </div>
                </div>
            </div>
        );
    }
}

export default GeneratorPage;
