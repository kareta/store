import React from 'react';

class LoginForm extends React.Component {

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-primary">Log in</button>
      </form>
    );
  }
}

export default LoginForm;