import React, { Component } from "react";
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    auth: false,
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="active"
                  activeStyle={{
                    color: "#fa923r",
                    textDecoration: "underline",
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          {this.state.auth ? (
            <Route path="/new-post" exact component={NewPost} />
          ) : (
            <Redirect to="/" />
          )}
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
