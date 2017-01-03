const orderForms = (state='A-Z', action) => {
    switch (action.type) {
        case 'ORDER_FORMS':
            return action.order
        default:
            return state
    }
}

export default orderForms
