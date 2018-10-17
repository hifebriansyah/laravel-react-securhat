import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = (props) => {

	if(props.post){

	    var style = {
	      backgroundImage: `url(${props.post.user.img_src})`
	    };

		return(
		    <li className="paper" key={props.post.id}>
		        <div className="header">
		            <div className="img" style={style}></div>
		            <a>{props.post.user.name}</a>
		        </div>
		        <div className="body">{props.post.body}</div>
		        <div className={props.footer + " footer"}>
		            <div className="row no-gutters">
		                <div className="col">
		                    <Link className="nav-link" to="/"><FontAwesomeIcon icon="heart" /> 5</Link>
		                </div>
		                <div className="col">
		                    <Link className="nav-link" to="/"><FontAwesomeIcon icon="comment" /> 3</Link>
		                </div>
		                <div className="col">
		                    <Link className="nav-link" to="/"><FontAwesomeIcon icon="retweet" /></Link>
		                </div>
		            </div>
		        </div>
		    </li>
		)
	}

	return(
		<div></div>
	)
}

export default Post ;