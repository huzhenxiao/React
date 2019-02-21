import React, { Component } from 'react';
import PostItem from './PostItem';
import PropTypes from 'prop-types';

class PostFeed extends Component {
  render() {
    const {posts} = this.props;
    return (posts.map(post=><PostItem key={post._id} post={post}/>))
  }
}

// 规定数据类型
PostFeed.propTypes = {
    posts:PropTypes.array.isRequired
  }

export default PostFeed;
