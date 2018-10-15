import React, { Component } from "react";
import ReactDOM from "react-dom";
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from "react-redux";

class Posts extends Component {
    constructor() {
        super();
        this.handleScroll = this.loadMore.bind(this);
    }

    loadMore() {
        var target = url+"/api/post";

        if(this.props.posts.nextHref) {
            target = this.props.posts.nextHref;
        }

        fetch(target, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
            .then(response => {
                return response.json();
            })
            .then(result => {
                this.props.concatPosts(result["data"]);

                if(result["next_page_url"] && this.props.posts.nextHref != result["next_page_url"]){
                    this.props.setPostsHref(result["next_page_url"]);
                }

                if(result["current_page"]+1 == result["last_page"]) {
                    this.props.isMorePosts(false);
                }
            });
    }

    handleClick(post) {
        this.setState({ currentPost: post });
    }

    render() {
        const loader = <li className="loader" key={0}>Loading</li>;

        var items = [];

        this.props.posts.data.map(post => {
            var style = {
              backgroundImage: `url(${post.user.img_src})`
            };

            items.push(
                <li className="paper" onClick={() => this.handleClick(post)} key={post.id}>
                    <div className="header">
                        <div className="img" style={style}></div>
                        <a>{post.user.name}</a>
                    </div>
                    <div className="body">{post.body}</div>
                    <div className="footer">
                        <div className="row no-gutters">
                            <div className="col">
                                <a>Comment</a>
                            </div>
                            <div className="col">
                                <a>Like</a>
                            </div>
                            <div className="col">
                                <a>Share</a>
                            </div>
                        </div>
                    </div>
                </li>
            );
        });

        return (
            <InfiniteScroll
                element="ul"
                className="component-posts"
                pageStart={0}
                loadMore={this.handleScroll}
                hasMore={this.props.posts.hasMoreItems}
                loader={loader}>

                {items}
            </InfiniteScroll>
        );
    }
}


const mapStateToProps = (state) => {
  return {
      posts: state.posts
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        concatPosts: (fab) => {
            dispatch({
                type: "CONCAT_POSTS",
                payload: fab
            });
        },
        isMorePosts: (fab) => {
            dispatch({
                type: "IS_MORE_POSTS",
                payload: fab
            });
        },
        setPostsHref: (fab) => {
            dispatch({
                type: "SET_POSTS_HREF",
                payload: fab
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
