import { combineReducers } from 'redux'

import fetchForms from './fetchForms.js'
import searchQuery from './searchForms.js'
import view from './changeFormsView.js'
import deleteForms from './deleteForms.js'

const reducer = combineReducers({
    fetchForms,
    searchQuery,
    view,
    deleteForms
})

export default reducer
