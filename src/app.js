import 'bootstrap'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'
import App from './containers/App.js'
import Home from './containers/Home.js'
import Settings from './containers/Settings.js'
import Skins from './components/Skins.js'
import SkinConfigurations from './components/SkinConfigurations.js'

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="settings/skins" component={Settings}>
                    <IndexRoute component={Skins} />
                    <Route path=":skin" component={SkinConfigurations} />
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)

