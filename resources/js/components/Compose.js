import React from "react";
import Post from './Post';

const Compose = (props) => {
    var errors = {
        body : "",
        invalid : ""
    };

    if(props.data.errors) if(props.data.errors.body) {
        errors.body = props.data.errors.body.join();
        errors.invalid = "is-invalid";
    }

    return (
        <div className='component-compose'>
            <div>
                <form className={props.data.submittedClass+' paper'}>
                    <label htmlFor='body'>Compose</label>
                    
                    <textarea
                        className={errors.invalid + ' form-control'}
                        id='compose'
                        onChange={(e)=>props.setData(e.target.value)}
                        value={props.data.body}  />

                    <div className="invalid-feedback">{errors.body}</div>
    			</form>

                <div id='post-submitted' className={props.data.submittedClass+" component-posts"}>
                    <Post post={props.data.submitted} footer="hidden" />
                </div>
            </div>
        </div>
    );
}

export default Compose;