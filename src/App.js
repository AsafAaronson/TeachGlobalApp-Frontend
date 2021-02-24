import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import ActivityPage from "./pages/ActivityPage";
import GeneratorPage from "./pages/GeneratorPage";
import Navbar from "./components/Navbar/Navbar";
import { activities, workpages, users } from "./database";
import { LikeHandlerContext } from "./contexts/LikeHandler";

export class App extends Component {
    constructor() {
        super();

        this.assignLike = id => {
            return (this.state.userLiked.includes(id))
        };

        this.handleLike = id => {
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
            console.log(this.state.userLiked);
        };

        this.state = {
            activityIds: [],
            workpageIds: [],
            userInfo: [],
            userLiked: [],
            handleLike: this.handleLike,
            assignLike: this.assignLike
        };
    }

    componentDidMount = () => {
        const data = this.fetchData(1);
        this.setState({
            activityIds: data.activityIds,
            workpageIds: data.workpageIds,
            userInfo: data.userInfo,
            userLiked: data.userInfo.userLikes
        });

    };

    //API call to the db to get activities
    //(array of activity objects), workpages(array of workpage objects), user like(array of id's)
    fetchData = id => {
        console.log("Fetching data");
        return {
            activityIds: activities.map(el => el.id),
            workpageIds: workpages.map(el => el.id),
            userInfo: users[id]
        };
    };

    // assignLikes = array => {
    //     return array.map(el => {
    //         if (this.state.userLiked.includes(el.id)) {
    //             el.isLiked = true;
    //         } else {
    //             el.isLiked = false;
    //         }
    //         return el;
    //     });
    // };

    render() {
        return (
            <div
                style={{
                    background: "#eeeeee",
                    height: "100%",
                    minHeight: "100vh"
                }}
            >
                <LikeHandlerContext.Provider value={this.state}>
                    <Router>
                        <Navbar user={this.state.userInfo} />
                        <main>
                            <Switch>
                                {/* HomePage Route */}
                                <Route exact path="/" render={() => false} />
                                {/* Tests Route */}
                                <Route
                                    exact
                                    path="/test"
                                    render={() => (
                                        <div>
                                            {this.state.userLiked}
                                            <ActivityPage
                                                title={"Title"}
                                                creator={"Asaf Aaronson"}
                                                date={"13.3.20"}
                                                id={1}
                                            />
                                        </div>
                                    )}
                                />
                                {/* Activities Page Route */}
                                <Route
                                    path="/activities"
                                    render={() => false}
                                />
                                {/* Workpages Page Route */}
                                <Route path="/workpages" render={() => false} />
                                {/* Liked Page Route */}
                                <Route path="/liked" render={() => false} />
                                {/* Generator Page Route */}
                                <Route
                                    path="/workpage/generator"
                                    render={() => (
                                        <div>
                                            <GeneratorPage />
                                        </div>
                                    )}
                                />
                                {/* A Page for each Activity or Workpage in the database */}
                                {/* {this.state.activities.map(el => (
                                    <Route
                                        path={`/activity/${el.id}`}
                                        render={() => (
                                            <ActivityPage activity={el.id} />
                                        )}
                                    />
                                ))}
                                {this.state.workpages.map(el => (
                                    <Route
                                        path={`/workpage/${el.id}`}
                                        render={() => (
                                            <WorkpagePage workpage={el.id} />
                                        )}
                                    />
                                ))} */}
                                {/* 404 */}
                                <Route render={() => <h1>404</h1>} />
                            </Switch>
                        </main>
                    </Router>
                </LikeHandlerContext.Provider>
            </div>
        );
    }
}

// export default App;
