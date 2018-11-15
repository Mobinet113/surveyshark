import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from "./redux/store";
import {syncHistoryWithStore} from "react-router-redux";
import Home from "./Containers/Home";

const history = syncHistoryWithStore(browserHistory, store);

class Routes extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Home} />
      </Router>
    )
  }
}

export default Routes;