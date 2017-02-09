const initialState = {
    skin: 'futurist',
    layout: 'boxed',
    background: 'degraded'
}

const skinSettings = (state=initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SKIN':
            var layout = 'fluid'
            if(action.skin == 'futurist') { layout = 'boxed' }
            return Object.assign({}, state, {skin: action.skin, layout: layout, background: 'degraded'})
        case 'CHANGE_SKIN_LAYOUT':
            return Object.assign({}, state, {layout: action.layout})
        case 'RESET_DEFAULT_STYLES':
            return initialState
        default:
            return state
    }
}

export default skinSettings

