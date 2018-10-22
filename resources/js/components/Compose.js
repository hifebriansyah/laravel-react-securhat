import React from "react";
import Post from './Post';

const Compose = (props) => {
    var errors = {
        body : "",
        invalid : ""
    };

    if(props.post.errors.body) {
        errors.body = props.post.errors.body.join();
        errors.invalid = "is-invalid";
    }

    return (
        <div className='component-compose'>
            <div>
                <form className={props.post.submittedClass+' paper'} onSubmit={(e)=>this.handleSubmit(e)}>
                    <label htmlFor='body'>Compose</label>
                    
                    <textarea
                        className={errors.invalid + ' form-control'}
                        id='compose'
                        onChange={(e)=>props.setPost(e.target.value)}
                        value={props.post.body}  />

                    <div className="invalid-feedback">{errors.body}</div>
    			</form>

                <div id='post-submitted' className={props.post.submittedClass+" component-posts"}>
                    <Post post={props.post.submitted} footer="hidden" />
                </div>
            </div>
        </div>
    );
}

export default Compose;