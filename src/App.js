import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./routes/Landing";
import Home from "./routes/Home";
import UserList from "./routes/UserList";
import UserDetail from "./components/UserDetail";
import TopBar from "./components/TopBar";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  state = {
    isloggedin: false,
  };
  onLogin = () => {
    // e.preventDefault();
    this.setState({ isloggedin: true });
  };
  onLogout = () => {
    this.setState({ isloggedin: false });
  };
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <TopBar
              isloggedin={this.state.isloggedin}
              onLogin={this.onLogin}
              onLogout={this.onLogout}
            />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route
                path="/home"
                component={() => (
                  <Home
                    isloggedin={this.state.isloggedin}
                    onLogin={this.onLogin}
                  />
                )}
              />
              <Route exact path="/users" component={UserList} />
              <Route exact path="/:userid" component={UserDetail} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
