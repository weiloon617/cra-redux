import React from 'react'
import { connect } from 'react-redux'

// Actions
import { changeColor } from './actions/simple'

// Styling
import './App.css'
import logo from './logo.svg'

let index = 0

const mapStateToProps = state => {
  const { simple } = state
  return { simple }
}

function App(props) {
  const simpleAction = () => {
    props.dispatch(changeColor(index))
    index = index + 1
  }

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: props.simple.backgroundColor }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={simpleAction} className="button">
          Change Background Color
        </button>
      </header>
    </div>
  )
}

export default connect(mapStateToProps)(App)
