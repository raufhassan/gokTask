import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./routes/Landing";
import Home from "./routes/Home";
import UserList from "./routes/UserList";
import UserDetail from "./components/UserDetail";
import TopBar from "./components/TopBar";
import MyProvider from "./MyProvider";
class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <BrowserRouter>
            <div>
              <TopBar />
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/home" component={Home} />
                <Route exact path="/users" component={UserList} />
                <Route exact path="/:userid" component={UserDetail} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>
      </MyProvider>
    );
  }
}

export default App;
