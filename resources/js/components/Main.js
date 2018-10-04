import React, { Component } from "react";
import ReactDOM from "react-dom";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch(url+"/api/post")
            .then(response => {
                return response.json();
            })
            .then(posts => {
                this.setState({ posts:posts["data"] });
            });
    }

    renderPosts() {
        url = url;
        return this.state.posts.map(post => {
            return (
                <li onClick={() => this.handleClick(post)} key={post.id}>
                    <div className="header">
                        <div className="img"></div>
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
    }

    handleClick(post) {
        this.setState({ currentPost: post });
    }

    render() {
        return (
            <div>
                <nav className="navbar sticky-top">
                    <a className="navbar-brand" href="#">Securhat</a>
                </nav>
                <ul className="posts">{this.renderPosts()}</ul>
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component 
* on pages that have a div with an ID of "root";  
*/

if (document.getElementById("root")) {
    ReactDOM.render(<Main />, document.getElementById("root"));
}
