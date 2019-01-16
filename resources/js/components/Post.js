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
		    <li className="paper" key={props.post.index}>
		        <div className="header">
		            <div className="img" style={style}></div>
		            <a>{props.post.user.name}</a>
		        </div>
		        <div className="body">{props.post.body}</div>
		        <div className={props.footer + " footer"}>
		            <div className="row no-gutters">
		                <div className="col">
		                    <a className="nav-link ripple" onClick={(id) => props.likeClick(props.post.id)} >
		                    	<FontAwesomeIcon className={likeClass + " solid"} icon="heart"/>
		                    	<FontAwesomeIcon className={likeClass + " line"} icon={['far', 'heart']}/>
		                    	&nbsp;<span>{props.post.like_counts}</span>
		                    </a>
		                </div>
		                <div className="col">
		                    <Link className="nav-link ripple" to={"/post/"+props.post.id+"/comments"}><FontAwesomeIcon icon={commentIcon} /> {props.post.comment_counts}</Link>
		                </div>
		                <div className="col">
		                    <Link className="nav-link ripple" to="/"><FontAwesomeIcon icon={shareIcon} /> {props.post.share_counts}</Link>
		                </div>
		            </div>
		        </div>
		    </li>
		)
	}

	return(<div></div>)
}

export default Post ;