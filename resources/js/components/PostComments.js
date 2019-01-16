import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Post from './Post';
import PostComment from './PostComment';
import Compose from './Compose';

class PostComments extends Component {
    constructor(props) {
        super();
        this.handleScroll = this.loadMore.bind(this);

		this.id = props.match.params.id;
		this.post = (props.posts) ? (props.posts.data[props.posts.indexes[this.id]] || null) : null;

		console.log(this.post);
    }

    loadMore() {
        var target = url+"/api/post/"+this.id+"/comments";

        if(this.post.commentsNextHref) {
            target = this.post.commentsNextHref;
        }

        fetch(target, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                
                if(response.status == 200){
                    return response.json();
                }

                if(response.status == 401){
                    this.props.setAuthToken(false)

                    return Promise.reject({
                        status: response.status,
                        statusText: response.statusText
                    })
                }
            })
            .then(result => {
                this.props.action_post_comments.concat({
                	data : result["data"] || [],
                	key : this.id
                });

                if(result["next_page_url"] && this.post.comments.nextHref != result["next_page_url"]){
                    this.props.action_post_comments.setHref({
						val : result["next_page_url"],
						key : this.id	
					});
                }

                if(result["current_page"] >= result["last_page"]) {
                    this.props.action_post_comments.isMore({
						val : false,
						key : this.id	
					});
                }
            });
    }
	render() {
		if(this.post){
		    const loader = <li className="loader" key={0}>Loading</li>;

		    var items = [];

		    if(this.post.comments) {
			    this.post.comments.map(postComment => {
			        items.push(
			            <PostComment
			                postComment={postComment}
			                key={postComment.id} />
			        );
			    });
			}

			return(
				<div>
					<ul className='component-posts'>
				    <Post
			            post={this.post}
			            likeClick={(id) => this.props.likeClick(id)} />
			        </ul>
			        <Compose
						setData={(e) => this.props.setPostComment(e)}
			        	data={this.props.postComment} />
		            <InfiniteScroll
		                element="ul"
		                className={"component-post-comments"}
		                pageStart={0}
		                loadMore={this.handleScroll}
		                hasMore={this.post.hasMoreComments}
		                loader={loader}>

		                {items}
		            </InfiniteScroll>
		        </div>
			)
		}

		return(<div></div>)
	}
}

export default PostComments ;