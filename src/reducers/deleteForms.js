const initialState = {
    form: '',
    confirm: ''
}

const deleteForms = (state=initialState, action) => {
    switch (action.type) {
        case 'DELETE_FORM':
            return Object.assign({}, state, { form: action.form, confirm: action.confirm })
        default:
            return state
    }
}

export default deleteForms
