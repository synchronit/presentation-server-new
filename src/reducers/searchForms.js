const searchForms = (state='', action) => {
    switch (action.type) {
        case 'SEARCH_FORM':
            return action.searchQuery
        default:
            return state
    }
}

export default searchForms
