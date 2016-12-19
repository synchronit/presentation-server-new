const initialState = {
    searchQuery: '',
    view: 'CAROUSEL_VIEW'
}

const forms = (state=initialState, action) => {
    switch (action.type) {
        case 'SEARCH_FORM':
            return Object.assign({}, state, { searchQuery: action.searchQuery });
        case 'CHANGE_VIEW':
            return Object.assign({}, state, { view: action.view });
        default:
            return state
    }
}

export default forms
