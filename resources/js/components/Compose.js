import React, { Component } from "react";

class Compose extends Component {
    constructor() {
        super();

        this.state = {
            auth: [],
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
        console.log('ok');
    }

    render() {
        return (
            <div className='component-compose'>
	            <form className="paper" onSubmit={(e)=>this.handleSubmit(e)}>
                    <label htmlFor='email'>Compose</label>
                    <textarea className='form-control' id='compose' onChange={(e)=>this.handleInput('email', e)}  />
				</form>
            </div>
        );
    }
}

export default Compose;