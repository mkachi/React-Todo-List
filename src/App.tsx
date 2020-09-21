import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch } from 'react-router-dom'
import router from './router'
import * as serviceWorker from './serviceWorker'

import './index.css'
import { TodoProvider } from './store/Todo'

const App: React.FC = () => {
  return (
    <TodoProvider>
      <Router>
        <Switch>{router()}</Switch>
      </Router>
    </TodoProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// scripts/config.js -> usePWA: true
// serviceWorker.register()
serviceWorker.unregister()
