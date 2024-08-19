import * as types from '../constants';

const initialState = {
    name: 'ReactJS',
    courseName: 'Redux'
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_USER_NAME:
            return {
                ...state,
                name: action.payload
            }
        case types.CHANGE_COURSE_NAME:
            return {
                ...state,
                courseName: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;