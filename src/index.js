import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './components/App'

const store = configureStore()

const jsx = (
   <Provider store={store}>
      <App />
   </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))

serviceWorker.unregister()