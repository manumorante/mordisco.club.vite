import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import ApiContext from './js/ApiContext'
import App from './App'
const Starfall = lazy(() => import('./components/Starfall'))
import './css/Spinner.css'
import './css/index.css'

ReactDOM.render(
  <React.StrictMode>
    <ApiContext>
      <App />
    </ApiContext>
    <Suspense fallback={null}>
      <Starfall />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
