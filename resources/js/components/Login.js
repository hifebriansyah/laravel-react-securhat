import React, { Component } from "react";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            auth: [],
            hasMoreItems: true,
            nextHref: null
        };

        this.handleScroll = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(key, e) {
        this.state.auth[key] = e.target.value;
        this.setState({auth: this.state.auth });
    }

    handleSubmit(e) {  
        e.preventDefault();

        fetch(url+'/api/user/login', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    'email': this.state.auth.email,
                    'password': this.state.auth.password
                })
            })
            .then(response => {
                return response.json();
            })
            .then(result => {
                if(result.data) if(result.data.token) {
                    localStorage.setItem('token', result.data.token);
                    window.location.replace('./post');
                }
            });
    }

    render() {
        return (
            <div className='component-login'>
	            <form onSubmit={(e)=>this.handleSubmit(e)}>
					<div className='form-group'>
					   <label htmlFor='email'>Email address</label>
					   <input type='email' className='form-control' id='email' onChange={(e)=>this.handleInput('email', e)}  />
					</div>
					<div className='form-group'>
					   <label htmlFor='password'>Password</label>
					   <input type='password' className='form-control' id='password' onChange={(e)=>this.handleInput('password', e)} />
					</div>
					<button type='submit' className='btn btn-primary'>Submit</button>
				</form>
            </div>
        );
    }
}

export default Login;