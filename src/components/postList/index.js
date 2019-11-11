import React, { Component, Fragment } from 'react';
import PostItem from '../postItem/';

export default class PostList extends Component {
    render() {
      let items = this.props.posts.map((post, index) => (
      <PostItem
          key={post.id}
          post={post}
      />
      ));
      return <Fragment>{items}</Fragment>;
    }
  }