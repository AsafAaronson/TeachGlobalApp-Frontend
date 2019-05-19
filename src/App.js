import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Activities from "./pages/Activities"; // props: data, raiseLike (function)
import Workpages from "./pages/Workpages"; // props: data, raiseLike (function)
import Liked from "./pages/Liked"; // props: data, raiseLike (function)
import ActivityPage from "./pages/ActivityPage"; // props: activity
import WorkpagePage from "./pages/WorkpagePage"; // props: workpage, raiseLike
import GeneratorPage from './pages/GeneratorPage';
import Navbar from "./components/Navbar";
import { activities, workpages, userLiked } from "./database";

class App extends Component {
    constructor() {
        super();
        this.state = {
            activities: [],
            workpages: [],
            userLiked: []
        };
    }

    assignLikes = array => {
        return array.map(el => {
            if (this.state.userLiked.includes(el.id)) {
                el.isLiked = true;
            } else {
                el.isLiked = false;
            }
            return el;
        });
    };

    handleLike(id) {
        if (this.state.userLiked.includes(id)) {
            const newarray = this.state.userLiked.filter(el => el !== id);
            this.setState(prevState => ({
                userLiked: newarray
            }));
        } else {
            this.setState(prevState => ({
                userLiked: [...prevState.userLiked, id]
            }));
        }
    }

    // getActivityContent = id => {
    //     return this.state.activities.filter(el => el.id === id)[0];
    // };

    // getWorkpageContent = id => {
    //     return this.state.workpages.filter(el => el.id === id)[0];
    // };

    fetchData = () => {
        //API call to the db to get activities
        //(array of activity objects), workpages(array of workpage objects), user like(array of id's)
        console.log("Fetching data");
        const [apiAct, apiWkp, apiUslks] = [activities, workpages, userLiked];
        return { activities: apiAct, workpages: apiWkp, userLiked: apiUslks };
    };

    componentDidMount = () => {
        const data = this.fetchData();
        this.setState({
            activities: data.activities,
            workpages: data.workpages,
            userLiked: data.userLiked
        });
    };

    render() {
        console.log(this.state.userLiked);
        return (
            <div className="App">
                <Router>
                    <Navbar />
                    <main>
                        <Switch>
                            {/* HomePage Route */}
                            <Route
                                exact
                                path="/"
                                render={() => (
                                    <HomePage />
                                )}
                            />
                            {/* Activities Page Route */}
                            <Route
                                path="/activities"
                                render={() => (
                                    <Activities
                                        data={{
                                            cardsContent: this.assignLikes(
                                                this.state.activities
                                            )
                                        }}
                                        raiseLike={id => this.handleLike(id)}
                                    />
                                )}
                            />
                            {/* Workpages Page Route */}
                            <Route
                                path="/workpages"
                                render={() => (
                                    <Workpages
                                        data={{
                                            cardsContent: this.assignLikes(
                                                this.state.workpages
                                            )
                                        }}
                                        raiseLike={id => this.handleLike(id)}
                                    />
                                )}
                            />
                            {/* Liked Page Route */}
                            <Route
                                path="/liked"
                                render={() => (
                                    <Liked
                                        data={{
                                            cardsContent: {
                                                activities: this.state
                                                    .activities,
                                                workpages: this.state.workpages
                                            },
                                            userLiked: this.state.userLiked
                                        }}
                                        raiseLike={id => this.handleLike(id)}
                                    />
                                )}
                            />
                            {/* A Page for each Activity or Workpage in the database */}
                            {this.state.activities.map(el => (
                                <Route
                                    path={`/activity/${el.id}`}
                                    render={() => (
                                        <ActivityPage
                                            activity={
                                                this.assignLikes(
                                                    this.state.activities
                                                ).filter(
                                                    act => act.id === el.id
                                                )[0]
                                            }
                                            raiseLike={id =>
                                                this.handleLike(id)
                                            }
                                        />
                                    )}
                                />
                            ))}
                            {this.state.workpages.map(el => (
                                <Route
                                    path={`/workpage/${el.id}`}
                                    render={() => (
                                        <WorkpagePage
                                            workpage={
                                                this.assignLikes(
                                                    this.state.workpages
                                                ).filter(
                                                    wkpg => wkpg.id === el.id
                                                )[0]
                                            }
                                            raiseLike={id =>
                                                this.handleLike(id)
                                            }
                                        />
                                    )}
                                />
                            ))}
                            {/* Generator Page Route */}
                            <Route
                                path="/workpage/generator"
                                render={() => (
                                    <div>
                                        <GeneratorPage amount={6} minLimit={0} maxLimit={10} type={'x'}/>
                                        <GeneratorPage amount={6} minLimit={30} maxLimit={100} type={'-'}/>
                                    </div>
                                )}
                            />
                            {/* 404 */}
                            <Route render={() => <h1>404</h1>} />
                        </Switch>
                    </main>
                </Router>
            </div>
        );
    }
}

export default App;
