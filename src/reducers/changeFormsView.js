const changeFormsViews = (state='LIST_VIEW', action) => {
    switch (action.type) {
        case 'CHANGE_VIEW':
            return action.view
        default:
            return state
    }
}

export default changeFormsViews
