import React from 'react';
import {  withRouter } from 'react-router-dom';
import { Grid, Form, Header, Message } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import styles from './styles.css';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: false,
            
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;

    this.setState({ error: false });

    if (!(username === 'hruday@gmail.com' && password === 'hruday123')) {
      return this.setState({ error: true});
      
    }
   this.props.history.push('/EmployeeList')
    //history.push('/EmployeeList');
    //<Redirect to='/EmployeeList' />
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  render() {
    const { error } = this.state;

    return (
      <Grid>
        <Helmet>
          <title>Login</title>
        </Helmet>

        <Grid.Column width={6} />
        <Grid.Column width={4}>
          <Form className={styles.loginForm} error={error} onSubmit={this.onSubmit}>
            <Header as="h1">Login</Header>
            {error && <Message
              error={error}
              content="That username/password is incorrect. Try again!"
            />}
            <Form.Input
              inline
              label="Username"
              name="username"
              onChange={this.handleChange}
            />
            <Form.Input
              inline
              label="Password"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <Form.Button type="submit"  >Login</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default withRouter(Login);
