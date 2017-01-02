const confirmDeleteForm = (state='', action) => {
    switch (action.type) {
        case 'CONFIRM_DELETE_FORM':
            return action.form
        default:
            return state
    }
}

export default confirmDeleteForm
