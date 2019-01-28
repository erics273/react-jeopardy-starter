import React, { Component } from 'react';
import { JeopardyService } from "./services/JeopardyService";
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      question: {},
      score: 0
    }
  }

  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        question: result.data[0]
      })
    })
  }

  componentDidMount() {
    this.getNewQuestion();
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state.question)}
      </div>
    );
  }
}

export default App;
