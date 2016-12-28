const initialState = {
    isFetching: false,
    request: {
        "code": 0,
        "message": "",
        "resultSet": {
            "headers": [],
            "rows": []
        }
    },
    error: ''
}

const fetchForms = (state=initialState, action) => {
    switch (action.type) {
        case 'FETCH_FORMS_REQUEST':
            return Object.assign({}, state, { isFetching: true })
        case 'FETCH_FORMS_SUCCESS':
            return Object.assign({}, state, { isFetching: false, request: action.request })
        case 'FETCH_FORMS_ERROR':
            return Object.assign({}, state, { isFetching: false, error: action.error })
        default:
            return state
    }
}

export default fetchForms
