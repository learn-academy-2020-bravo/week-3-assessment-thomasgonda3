// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1.  we create a state variable to store our user's input.
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. this function will change the value of userInput within our state object to be the same as whatever is typed into the input field it is attached to.
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. destructures the value of userInput from our state object.
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. whenever something is typed into the field, the method to change the state activates */}
          onChange={ this.robot }
          {/* 5. shows the text within the input element, which should be whatever this.state.userInput is. */}
          value={ userInput }
        />

        <div>
          {/* 6. A component is being created. */}
          <GoodRobot
            {/* 7. It is taking in an argument that is the user's inputted text.*/}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8.  everything within the return will be displayed on the page.  It will show a header with a title showing that it is a good robot, and it will return what it believes to be the user's input.
      <div>
        <h3>Good Robot</h3>
        {/* 9. calls back the argument that it took in from class App */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. allows the class GoodRobot to expose its assets to other modules within the program.
export default GoodRobot
