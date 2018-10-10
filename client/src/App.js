import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PublicSite from './components/features/PublicSite/PublicSite';
import SignupPage from './components/features/PublicSite/SignupPage/SignupPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          {/* Phần dưới chưa tạo component */}
          <Route path="/admin/user" exact component={SignupPage} />
          <Route path="/admin/product" exact component={SignupPage} />
          <Route path="/admin/bill" exact component={SignupPage} />
          <Route path="/" component={PublicSite} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
