const massFormsSelection = (state=false, action) => {
    switch (action.type) {
        case 'MASS_FORMS_SELECTION':
            return !state
        default:
            return state
    }
}

export default massFormsSelection
