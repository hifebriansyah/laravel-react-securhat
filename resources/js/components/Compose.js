import React from "react";
import Post from './Post';

const Compose = (props) => {
    return (
        <div className='component-compose'>
            <div>
            <form className={props.post.submittedClass+' paper'} onSubmit={(e)=>this.handleSubmit(e)}>
                <label htmlFor='body'>Compose</label>
                <textarea
                    className='form-control'
                    id='compose'
                    onChange={(e)=>props.setPost(e.target.value)}
                    value={props.post.body}  />
			</form>

            <div id='post-submitted' className={props.post.submittedClass+" component-posts"}>
                <Post post={props.post.submitted} footer="hidden" />
            </div>
            </div>
        </div>
    );
}

export default Compose;