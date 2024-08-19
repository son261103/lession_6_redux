import * as types from '../constants';

export const actChangeActionName = (param) => {
    return {
        type: types.CHANGE_USER_NAME,
        payload: param
    }
}

export const actChangeActionCourseName = (param) => {
    return {
        type: types.CHANGE_COURSE_NAME,
        payload: param
    }
}