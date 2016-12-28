export function fetchForms() {
    return dispatch => {
        dispatch({ type: 'FETCH_FORMS_REQUEST' });
        return fetch("http://dev.synchronit.com/appbase-webconsole/json?command=show forms", {})
            .then(resp => resp.json())
            .then(json => {
                return dispatch({ type: 'FETCH_FORMS_SUCCESS', request: json })
            }).catch(error => {
                dispatch({ type: 'FETCH_FORMS_ERROR', error: 'Oops something is wrong' })
            });
    }
}

export const searchForm = (searchQuery) => ({
    type: 'SEARCH_FORM',
    searchQuery
})

export const deleteForm = (form, confirm) => ({
    type: 'DELETE_FORM',
    form,
    confirm
})

export const changeView = (view) => ({
    type: 'CHANGE_VIEW',
    view
})
