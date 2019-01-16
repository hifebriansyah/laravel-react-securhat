import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostComment = (props) => {
	if(props.postComment){

	    var style = {
	      backgroundImage: `url(${props.postComment.user.img_src})`
	    };

		return(
		    <li key={props.postComment.id}>
		        <div className="img" style={style}></div>
		        <div className="paper">
			        <div className="header">
			            <a>{props.postComment.user.name}</a>
			        </div>
			        <div className="body">{props.postComment.body}</div>
		        </div>
		    </li>
		)
	}

	return(
		<div></div>
	)
}

export default PostComment;