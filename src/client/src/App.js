import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import routesConfig from './routesConfig';

class App extends Component {
  render() {
    return (
      <div className="App">       
        {routesConfig.map((value, key) => {
          return <Route
            key={key}
            path={value.path}
            component={value.component}
            exact={value.exact}
          ></Route>
        })}
      </div>
    );
  }
}

export default App;
