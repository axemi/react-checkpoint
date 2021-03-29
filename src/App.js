import React from "react"
import './App.css';
import EmailList from "./emailList"
import Search from "./search"


/*
- view all messages X
- view single email X
- send email
- search specific email by subject
*/
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      status: "default"
    }
  }

  handleStatus = (value) => {
    this.setState({
      status: value
    })
  } 
  render() {
    return (
      <div className="app">
        <header id="app-header">
          <h1>MOCK GMAIL</h1>
          <Search parentStatus={this.handleStatus} emails={this.state.emails}/>
        </header>
        <EmailList parentStatus={this.handleStatus}/>
        <button id="compose-email">Compose</button>
      </div>
    );
  }
}

export default App;
