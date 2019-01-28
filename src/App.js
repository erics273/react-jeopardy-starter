import React, { Component } from 'react';
import { JeopardyService } from "./services/JeopardyService";
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {category:{}},
      score: 0
    }
  }

  getNewQuestion = () => {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
      console.log(this.state.data.answer)
    })
  }

  componentDidMount = () => {
    this.getNewQuestion();
  }

  checkAnswer = (event) => {
    event.preventDefault();

    const userAnswer = event.target.answer.value
    if(userAnswer === this.state.data.answer){
      this.setState((state, props) => ({
        score: state.score + state.data.value
      }));
    }else{
      this.setState((state, props) => ({
        score: state.score - state.data.value
      }));
    }
    this.getNewQuestion();
    event.target.reset();
  }

  render() {

    return (
      <div>
        Question: {this.state.data.question} <br/>
        Category: {this.state.data.category.title}<br/>
        Point Value: {this.state.data.value}<br/>
        score: {this.state.score}<br/>
        <form onSubmit={this.checkAnswer}>
          <input name="answer" type="text" /><button>submit</button>
        </form>
      </div>
    );
  }
}

export default App;
