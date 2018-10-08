import React, { Component } from "react";
import ReactDOM from "react-dom";
import InfiniteScroll from 'react-infinite-scroller';
import Header from './Header';

localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIzM2E1MDFkOGIwOTY2Y2QxZGM2MGI5NzU3MWJiZmNlOGNiYWE3NGU3MDY1M2I4MzEwNGI1OGM1ZjRkMGY0NTY2Y2Q4ZGY4YWVjZmEzYTAzIn0.eyJhdWQiOiIyIiwianRpIjoiYjMzYTUwMWQ4YjA5NjZjZDFkYzYwYjk3NTcxYmJmY2U4Y2JhYTc0ZTcwNjUzYjgzMTA0YjU4YzVmNGQwZjQ1NjZjZDhkZjhhZWNmYTNhMDMiLCJpYXQiOjE1Mzg0OTUyMzksIm5iZiI6MTUzODQ5NTIzOSwiZXhwIjoxNTcwMDMxMjM5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.OomeSY5_tgb9LyttbPze_VyzAz7yDdxaMaIxUaedqnt3FJovFDZpIYdETzdk75_o_jliTxRNB0DQ8rHIMN5vDbuBVEBxxhSKk-gbogdswpMZ-WPgLUSkcaaBwdGSR_dasnXt4pUe-GAjCjm5uRfbrrxs0AVkzN-I7RD9FmWvUI0L30uvHkchvHmtlwRcbECoVQYDgeLpQLuLbq0Z0tcLnrkXEXysfmtfESTceYGVNqou5Mb4djRU971_NFVMxkINXMSyAIIYDk1CoKFqXrbdiLQpWF4uMmhjPICD66MvXi1cQ1FdUdGGDvBmF26WIQbCT57VikTnNMa9Vv-eaWUBVg_r5b0JENZeqKKfrR2u-7aYV5BAceFvYVchxYVuzGnT3NzPd5gzIRxcv2pfev2aGvwomFHHNAijZrNZ1p0ImtDuEtQhRYJ_rflyCAXb5mp9GF38yD7pVRdyGq7R5iENYYijCK6_wGBqlULFTVFquPJfnHs3lClu1PD73M5VXqQw7eaGiBbhMFhxA8s6oARmN56M8W5TTeJkLJYoE-0kma3JOKnWIjIs0HhJSbiq-IV01F8giu0c-5Vawvjw1vZSvUnxJ2pfXeqKHDy6vv2PX_RsOsi99o0mn-17Au0zXzRhM0IjrFG4y1qU31ktAeCteBs_d8XllcYVZ0Zk0UMwWIQ');

class Post extends Component {
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
            <div className="component-post">
                <Header />
                <InfiniteScroll
                    element="ul"
                    className="posts"
                    pageStart={0}
                    loadMore={this.handleScroll}
                    hasMore={this.state.hasMoreItems}
                    loader={loader}>

                    {items}
                </InfiniteScroll>
            </div>
        );
    }
}

export default Post;

if (document.getElementById("root")) {
    ReactDOM.render(<Post />, document.getElementById("root"));
}
