import React, { PureComponent } from "react";
import { HashRouter, Route } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import { Main } from "./views/Main/Main";
import { RegistryList } from "./views/RegistryList/RegistryList";

export class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/" component={Main} />
          <Route path="/registry-list" component={RegistryList} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
