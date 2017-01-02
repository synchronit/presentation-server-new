const initialState = {
    selectedForms: [],
    amount: 0
}

const formSelection = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_FORM_TO_SELECTION':
            var newState = Object.assign({}, state)
            newState.selectedForms.push(action.form)
            newState.amount++
            return newState
        case 'DELETE_FORM_TO_SELECTION':
            var newState = Object.assign({}, state)
            newState.selectedForms = newState.selectedForms.filter((item) => {
                return item[0] != action.form[0]
            })
            newState.amount--
            return newState
        default:
            return state
    }
}

export default formSelection
