import React from "react";

const Compose = (props) => {
    return (
        <div className='component-compose'>
            <form className="paper" onSubmit={(e)=>this.handleSubmit(e)}>
                <label htmlFor='body'>Compose</label>
                <textarea
                    className='form-control'
                    id='compose'
                    onChange={(e)=>props.setPost(e.target.value)}
                    value={props.post.body}  />
			</form>
        </div>
    );
}

export default Compose;