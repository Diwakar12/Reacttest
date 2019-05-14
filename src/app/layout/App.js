import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import EmployeeList from './EmployeeList';

class App extends Component {
  render() {
    return (
      <Route
      
      render={() => (
        <div>
         
          <Container className="main">
            <Switch>
            <Route path="/EmployeeList" component={EmployeeList} />
              <Route path="/" component={Login} />
              
            </Switch>
          </Container>
        </div>
      )}
    />
    );
  }
}

export default App;