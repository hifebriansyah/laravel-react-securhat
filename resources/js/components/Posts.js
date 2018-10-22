import React, { Component } from "react";
import ReactDOM from "react-dom";
import InfiniteScroll from 'react-infinite-scroller';
import Post from './Post';

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
                this.props.concatPosts(result["data"]);

                if(result["next_page_url"] && this.props.posts.nextHref != result["next_page_url"]){
                    this.props.setPostsHref(result["next_page_url"]);
                }

                if(result["current_page"]+1 == result["last_page"]) {
                    this.props.isMorePosts(false);
                }
            });
    }

    render() {
        const loader = <li className="loader" key={0}>Loading</li>;

        var items = [];
        var keys =[];

        this.props.posts.data.map(post => {
            if(keys.indexOf(post.id) == -1){
                keys.push(post.id);
                items.push(<Post post={post} key={post.id} likeClick={(id) => this.props.likeClick(id)} />);
            }
        });

        return (
            <InfiniteScroll
                element="ul"
                className={this.props.posts.class + " component-posts"}
                pageStart={0}
                loadMore={this.handleScroll}
                hasMore={this.props.posts.hasMoreItems}
                loader={loader}>

                {items}
            </InfiniteScroll>
        );
    }
}


export default Posts;
