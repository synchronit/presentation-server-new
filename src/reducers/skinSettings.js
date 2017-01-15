const initialState = {
    skin: 'futurist',
    layout: 'boxed',
    background: 'degraded'
}

const skinSettings = (state=initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SKIN_LAYOUT':
            return Object.assign({}, state, {layout: action.layout})
        default:
            return state
    }
}

export default skinSettings

