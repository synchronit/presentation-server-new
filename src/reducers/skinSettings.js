const initialState = {
    skin: 'futurist',
    layout: 'boxed',
    background: 'degraded',
    workspace: 'workspace-color2',
    header: 'dark',
    mainColor: 'main-color1',
    secundaryColor: 'secundary-color1'
}

const skinSettings = (state=initialState, action) => {
    switch (action.type) {
        case 'CHANGE_SKIN':
            var layout = 'fluid'
            if(action.skin == 'futurist') { layout = 'boxed' }
            return Object.assign({}, state, {skin: action.skin, layout: layout, background: 'degraded'})
        case 'CHANGE_SKIN_LAYOUT':
            return Object.assign({}, state, {layout: action.layout})
        case 'CHANGE_SKIN_BACKGROUND':
            return Object.assign({}, state, {background: action.background})
        case 'CHANGE_SKIN_HEADER':
            return Object.assign({}, state, {header: action.header})
        case 'CHANGE_SKIN_WORKSPACE':
            return Object.assign({}, state, {workspace: action.workspace})
        case 'CHANGE_SKIN_MAIN_COLOR':
            return Object.assign({}, state, {mainColor: action.mainColor})
        case 'CHANGE_SKIN_SECUNDARY_COLOR':
            return Object.assign({}, state, {secundaryColor: action.secundaryColor})
        case 'RESET_DEFAULT_STYLES':
            return initialState
        default:
            return state
    }
}

export default skinSettings

