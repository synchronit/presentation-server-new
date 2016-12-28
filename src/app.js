import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'
import App from './containers/App'

import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.js'

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

