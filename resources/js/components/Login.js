import React, { Component } from "react";

class Login extends Component {
    constructor() {
        super();

        this.state = {
            auth: []
        };

        this.handleInput = this.handleInput.bind(this);
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
                    window.location.replace('./');
                }
            });
    }

    render() {
        return (
            <div className='component-login'>
                <img src ={url + "/images/logo.png"} />
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input placeholder='email' type='email' id='email' onChange={(e)=>this.handleInput('email', e)}  />
                    <input placeholder='password' type='password' id='password' onChange={(e)=>this.handleInput('password', e)} />
                    <button type='submit' className='btn btn-block'>Submit</button>
				</form>
            </div>
        );
    }
}

export default Login;