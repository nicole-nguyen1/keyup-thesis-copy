import React from 'react';
import LoginForm from './loginForm.jsx';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default LoginContainer;