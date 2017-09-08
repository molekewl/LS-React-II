import React, { Component } from 'react';
import CommentSection from './CommentSection';

class PostContainer extends Component {
  constructor(props) {
    super(props);
  
   console.log(this.props.user);
  }
 

  render() {
    return (
      <div className='posts'>
        <div className='thumbnail'>
          <img alt='thumbnail' src={this.props.thumbnail} height="42px" width="42px" />
        </div>
        <div className='image'>
          <img alt='instagram-post' src={this.props.image} height="512px" width="512px"/>
        </div>
        <div className='comments'>
              <CommentSection comments={this.props.comments} />           
        </div>
      </div>
    );
  }
}

export default PostContainer;