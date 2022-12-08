import {
    FETCH_TODOLIST_REQUEST,
    FETCH_TODOLIST_SUCCESS,
    FETCH_TODOLIST_FAILURE
} from "./TodoListType"

const initialState = {
    loading: false,
    TodoList: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODOLIST_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_TODOLIST_SUCCESS:
            return{
                loading: false,
                TodoList: action.payload,
                error: ''
            }
        case FETCH_TODOLIST_FAILURE:
            return{
                loading: false,
                TodoList: [],
                error: action.payload
            }
        default: return state
    }
}
export default reducer