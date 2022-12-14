import {
    FETCH_TODOLIST_SUCCESS,
    FETCH_TODOLIST_FAILURE,
    ADD_TODOITEM_SUCCESS,
    ADD_TODOITEM_FAILURE,
    EDIT,
    DELETE
} from "./TodoListType"

const initialState = {
    loading: true,
    TodoList: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
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
        case ADD_TODOITEM_SUCCESS:
            const TodoList = state.TodoList.concat(action.payload)
            return{
                ...state,
                TodoList: TodoList
            }
        case ADD_TODOITEM_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case EDIT:
            const TodoLis = state.TodoList.map((number) => 
                number.id === action.payload.id ? (number=action.payload) : number)
            return {
                ...state,
                TodoList: TodoLis
            }
        case DELETE: 
            const TodoLi = state.TodoList.filter((number) => 
                number.id !== action.payload.id)
            return {
                ...state,
                TodoList: TodoLi
            }
        default: return state
    }
}
export default reducer