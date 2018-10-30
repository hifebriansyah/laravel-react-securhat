import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Post = (props) => {

	if(props.post){

	    var style = {
	      backgroundImage: `url(${props.post.user.img_src})`
	    };

	    var likeClass = (props.post.liked) ? 'attach' : '';
	    var commentIcon = (props.post.commented) ? 'comment' : ['far', 'comment'];
	    var shareIcon = (props.post.shared) ? 'share-square' : ['far', 'share-square'];

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
		                    <Link className="nav-link ripple" to="/" onClick={(id) => props.likeClick(props.post.id)} >
		                    	<FontAwesomeIcon data-like={props.post.id} className={likeClass + " solid"} icon="heart"/>
		                    	<FontAwesomeIcon data-like={props.post.id} className={likeClass + " line"} icon={['far', 'heart']}/>
		                    	&nbsp;<span data-like={props.post.id} >{props.post.like_counts}</span>
		                    </Link>
		                </div>
		                <div className="col">
		                    <Link className="nav-link ripple" to="/" onClick={(id) => props.commentClick(props.post.id)}><FontAwesomeIcon icon={commentIcon} /> {props.post.comment_counts}</Link>
		                </div>
		                <div className="col">
		                    <Link className="nav-link ripple" to="/"><FontAwesomeIcon icon={shareIcon} /> {props.post.share_counts}</Link>
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