import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from './Header';

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

        var target = url+'/api/user/login';

        fetch(target, {
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
                if(result.data) alert("ok");
            });
    }

    render() {
        return (
            <div>
                <Header />
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
            </div>
        );
    }
}

export default Login;

if (document.getElementById("root")) {
    ReactDOM.render(<Login />, document.getElementById("root"));
}