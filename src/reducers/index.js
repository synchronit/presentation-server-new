import { combineReducers } from 'redux'

import fetchForms from './fetchForms.js'
import searchQuery from './searchForms.js'
import view from './changeFormsView.js'
import confirmDeleteForm from './confirmDeleteForm.js'
import massFormsSelection from './massFormsSelection.js'
import formSelection from './formSelection.js'
import orderForms from './orderForms.js'
import skinSettings from './skinSettings.js'

const reducer = combineReducers({
    fetchForms,
    searchQuery,
    view,
    confirmDeleteForm,
    massFormsSelection,
    formSelection,
    orderForms,
    skinSettings
})

export default reducer
