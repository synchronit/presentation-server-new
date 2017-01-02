import { combineReducers } from 'redux'

import fetchForms from './fetchForms.js'
import searchQuery from './searchForms.js'
import view from './changeFormsView.js'
import confirmDeleteForm from './confirmDeleteForm.js'
import massFormsSelection from './massFormsSelection.js'
import formSelection from './formSelection.js'

const reducer = combineReducers({
    fetchForms,
    searchQuery,
    view,
    confirmDeleteForm,
    massFormsSelection,
    formSelection
})

export default reducer
