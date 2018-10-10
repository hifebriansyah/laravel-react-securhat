import React, { Component } from "react";
import ReactDOM from "react-dom";
import InfiniteScroll from 'react-infinite-scroller';

class Posts extends Component {
    constructor() {
        super();
        
        this.state = {
            posts: [],
            hasMoreItems: true,
            nextHref: null
        };

        this.handleScroll = this.loadMore.bind(this);
    }

    loadMore() {
        var target = url+"/api/post";

        if(this.state.nextHref) {
            target = this.state.nextHref;
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
                var posts = this.state.posts.concat(result["data"]);

                this.setState({
                    posts : posts
                });

                if(result["next_page_url"] && this.state.nextHref != result["next_page_url"]){
                    this.setState({
                        nextHref : result["next_page_url"]
                    });
                }

                if(result["current_page"]+1 == result["last_page"]) {
                    this.setState({
                        hasMoreItems : false
                    });
                }
            });
    }

    handleClick(post) {
        this.setState({ currentPost: post });
    }

    render() {
        const loader = <li className="loader" key={0}>Loading</li>;

        var items = [];

        this.state.posts.map(post => {
            var style = {
              backgroundImage: `url(${post.user.img_src})`
            };

            items.push(
                <li onClick={() => this.handleClick(post)} key={post.id}>
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
                hasMore={this.state.hasMoreItems}
                loader={loader}>

                {items}
            </InfiniteScroll>
        );
    }
}

export default Posts;
