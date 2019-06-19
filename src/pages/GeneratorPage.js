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

    getRandomPair = () => {
        const randNum = this.getRandomNumber(
            this.state.minLimit,
            this.state.maxLimit
        );
        return [
            randNum,
            this.getRandomNumber(
                this.state.minLimit,
                this.state.arithmetic === "-" || this.state.arithmetic === "%"
                    ? randNum
                    : this.state.maxLimit
            )
        ];
    };

    generatePageContent = () => {
        let content = [];
        for (let i = 0; i < this.state.amount; i += 1) {
            let pair = this.getRandomPair();
            while (content.includes(pair)) {
                pair = this.getRandomPair();
            }
            content.push(pair);
        }
        console.log(this.state);
        return content;
    };

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleGenerate = () => {
        // check if the state is legal
        // render according to the rules
        const content = this.generatePageContent().map(pair =>
            this.state.type === "Vertical" ? (
                <VerticalProblem
                    numbers={pair}
                    arithmetic={this.state.arithmetic}
                />
            ) : (
                <OneLineProblem
                    numbers={pair}
                    arithmetic={this.state.arithmetic}
                />
            )
        );
        console.log(content);

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
                                            title="type"
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
