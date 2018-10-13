import React, { Component } from 'react';

class LoginPage extends Component {
    state = {
        email: "",
        password: "",
        submitted: false
    }
    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ submitted: true });
    }
    
    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;