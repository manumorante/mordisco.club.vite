import React from 'react'
import ReactDOM from 'react-dom'
import ApiContext from './js/ApiContext'
import App from './App'
import './css/Spinner.css'
import './css/index.css'

ReactDOM.render(
  <React.StrictMode>
    <ApiContext>
      <App />
    </ApiContext>
  </React.StrictMode>,
  document.getElementById('root')
)
