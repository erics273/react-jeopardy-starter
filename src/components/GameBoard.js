import React, { Component } from 'react';

class GameBoard extends Component {

  render() {

    return (
      <div>
        Question: {this.props.data.question} <br/>
        Category: {this.props.data.category.title}<br/>
        Point Value: {this.props.data.value}<br/>
        score: {this.props.score}<br/>
        <form onSubmit={this.props.scoreGame}>
          <input name="answer" type="text" /><button>submit</button>
        </form>
      </div>
    );
  }
}

export default GameBoard;
