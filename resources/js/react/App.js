import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './redux/store';
import 'semantic-ui-css/semantic.min.css';
import '../../sass/app.css';
import Routes from './Routes';
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>

          <Header/>

          <Routes />

          <Footer/>

        </div>
      </Provider>
    );
  }
}

if (document.getElementById('survey-shark-wrapper')) {
  ReactDOM.render(<App/>, document.getElementById('survey-shark-wrapper'));
}