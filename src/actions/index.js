export function fetchForms() {
    return dispatch => {
        dispatch({type: 'FETCH_FORMS_REQUEST'});
        return fetch("http://dev.synchronit.com/appbase-webconsole/json?command=show forms", {})
            .then(resp => resp.json())
            .then(json => {
                return dispatch({type: 'FETCH_FORMS_SUCCESS', request: json})
            }).catch(error => {
                dispatch({type: 'FETCH_FORMS_ERROR', error: 'Oops something is wrong'})
            });
    }
}

export function deleteForm(form) {
    return dispatch => {
        dispatch({type: 'FETCH_DELETE_FORMS_REQUEST'});
        return fetch("http://dev.synchronit.com/appbase-webconsole/json?command=delete form " + form, {})
            .then(resp => resp.json())
            .then(json => {
                return dispatch({type: 'FETCH_DELETE_FORMS_SUCCESS', request: json, form: form})
            }).catch(error => {
                dispatch({type: 'FETCH_FORMS_ERROR', error: 'Oops something is wrong'})
            });
    }
}

export const confirmDeleteForm = (form) => ({
    type: 'CONFIRM_DELETE_FORM',
    form
})

export const searchForm = (searchQuery) => ({
    type: 'SEARCH_FORM',
    searchQuery
})

export const changeView = (view) => ({
    type: 'CHANGE_VIEW',
    view
})

export const massFormsSelection = () => ({
    type: 'MASS_FORMS_SELECTION'
})

export const addFormToSelection = (form) => ({
    type: 'ADD_FORM_TO_SELECTION',
    form
})

export const deleteFormToSelection = (form) => ({
    type: 'DELETE_FORM_TO_SELECTION',
    form
})

export const orderForms = (order) => ({
    type: 'ORDER_FORMS',
    order
})

export const changeSkin = (skin) => ({
    type: 'CHANGE_SKIN',
    skin
})

export const changeSkinLayout = (layout) => ({
    type: 'CHANGE_SKIN_LAYOUT',
    layout
})

export const changeSkinBackground = (background) => ({
    type: 'CHANGE_SKIN_BACKGROUND',
    background
})

export const changeSkinHeader = (header) => ({
    type: 'CHANGE_SKIN_HEADER',
    header
})

export const changeSkinWorkspace = (workspace) => ({
    type: 'CHANGE_SKIN_WORKSPACE',
    workspace
})

export const changeMainColor = (mainColor) => ({
    type: 'CHANGE_SKIN_MAIN_COLOR',
    mainColor
})

export const changeSecundaryColor = (secundaryColor) => ({
    type: 'CHANGE_SKIN_SECUNDARY_COLOR',
    secundaryColor
})

export const resetDefaultStyles = () => ({
    type: 'RESET_DEFAULT_STYLES'
})