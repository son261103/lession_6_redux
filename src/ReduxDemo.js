// // // tạo một reducer
// //
// // const reducer = "Devmaster";
// // // hiển thị trên console
// // console.log("reducer: ", reducer);
// //
// // export default reducer;
//
// // 1. tạo create store tu redux
//
// import {createStore} from 'redux';
//
// // 2. tạo reducer từ old state và action
//
// // input: old stae , action
//
// // output: new state
//
// // 2.1 tạo state ban đầu
//
// const initState = {
//     name: "Nguyen Van A",
//     coureName: "ReactJS"
// };
//
// // 2.2 tạo reducer
//
// const reducer = (state = initState, action) => {
//     // xử lý logic khi tiếp nhận action
//
//     switch (action.type) {
//         case "CHANGE_USER_NAME":
//             state.name = action.payload;
//             state.coureName = action.payload;
//             break;
//         // return {
//         //     // ...state,
//         //     // name: action.payload
//         // }
//
//         case "CHANGE_COURSE_NAME":
//             state.coureName = action.payload;
//             break;
//         default:
//             return state
//     }
//
//     return state;
// };
//
// // 3. tạo store
//
// const store = createStore(reducer);
//
//
// // hiển thị dữ liệu từ store ra component
// console.log("store", store) // cấu trúc của store
// // get state ra sate
// console.log(store.getState())
//
//
// ///////////////   action   //////////////////
// // thực hiện thay đổi state trong store
//
// // actione làm thay đổi username trong state cảu store
//
// // viết lại logic cho reducer để thay đổi state
//
// // 1. tạo action
// const actChangeActionName = (param) => {
//     return {
//         type: "CHANGE_USER_NAME",
//         payload: param
//
//     }
// }
//
// // đưa action từ component lên store để thục hiện cập nhật state
// store.dispatch(actChangeActionName("Nguyen Van B"));
// console.log(store.getState())
//
//
// // action lm thay đổi courseName trong state cảu store
//
// const actChangeActionCourseName = (param) => {
//     return {
//         type: "CHANGE_COURSE_NAME",
//         payload: param
//     }
// }
// store.dispatch(actChangeActionCourseName("React-----------------JS"));
// console.log(store.getState())
//
//
// // 4. export store
// export default reducer;