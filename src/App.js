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

    function GameBoard(props){
        return (
          <div>
            Question: {props.data.question} <br/>
            Category: {props.data.category.title}<br/>
            Point Value: {props.data.value}<br/>
            score: {props.score}<br/>
            <form onSubmit={props.eventHandler}>
              <input name="answer" type="text" /><button>submit</button>
            </form>
          </div>
        )
    }

    return (
     <GameBoard data={this.state.data} score={this.state.score} eventHandler={this.checkAnswer} />
    );
  }
}

export default App;
