import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './PostContainer';
import SearchBar from './SearchBar';
import postData from './application-data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchBar />
        {postData.map((post, i) => {
          return (
            <PostContainer
              key={i}
              thumbnail={post.thumbnailUrl}
              image={post.imageUrl}
              likes={post.likes}
              timestamp={post.timestamp}
              user={post.comments.username}
              text={post.comments.text}
            />
          );
        })}
      </div>
    );
  }
}

export default App;