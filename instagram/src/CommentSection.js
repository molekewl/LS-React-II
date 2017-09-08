import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
      };
    this.componentDidMount = this.componentDidMount.bind(this);
    console.log(this.state);
    }

  componentDidMount(event) {
    this.setState({ 
      comments: this.props.comments
    });
  }

  render() {
    return (
      <div className='username'>
          {this.props.comments}  
      <div>
      <div className='userComment'>
         {this.props.text} 
      </div>
         <input 
          onChange={this.componentDidMount}
        /> 
      </div>
      </div>
    );
  }
}

export default CommentSection;