import React from 'react'
import { connect } from 'react-redux'
import { simpleAction } from './actions/simpleActions'

import logo from './logo.svg'
import './App.css'

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
})

function App(props) {
  const simpleAction = () => props.simpleAction()

  return (
    <div className="App">
      <header className="App-header">
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
        <pre>{JSON.stringify(props)}</pre>
        <button onClick={simpleAction}>Test redux action</button>
      </header>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
