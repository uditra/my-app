import {
    FETCH_TODOLIST_REQUEST,
    FETCH_TODOLIST_SUCCESS,
    FETCH_TODOLIST_FAILURE
} from "./TodoListType"
import {
    ADD_TODOITEM_REQUEST,
    ADD_TODOITEM_SUCCESS,
    ADD_TODOITEM_FAILURE
} from "./TodoListType"
import axios from "axios"

export const fetchTodoListRequest = () => {
    return {
        type: FETCH_TODOLIST_REQUEST
    }
}

export const fetchTodoListSuccess = TodoList => {
    return {
        type: FETCH_TODOLIST_SUCCESS,
        payload: TodoList 
    }
}

export const fetchTodoListFailure = err => {
    return {
        type: FETCH_TODOLIST_FAILURE,
        payload: err
    }
}

export const fetchTodoList = () => {
    return (dispatch) => {
        dispatch(fetchTodoListRequest)
        axios.get('http://localhost:3333/TodoList')
        .then(response => {
            const TodoList = response.data
            dispatch(fetchTodoListSuccess(TodoList))
        })
        .catch(err => {
            const errMsg = err.message
            dispatch(fetchTodoListFailure(errMsg))
        })
    }
}

export const addTodoItemRequest = () => {
    return {
        type: ADD_TODOITEM_REQUEST
    }
}

export const addTodoItemSuccess = TodoItem => {
    return {
        type: ADD_TODOITEM_SUCCESS,
        payload: TodoItem 
    }
}

export const addTodoItemFailure = err => {
    return {
        type: ADD_TODOITEM_FAILURE,
        payload: err
    }
}

export const addTodoItems = (TodoList) => {
    return (dispatch) => {
        console.log(TodoList)
        dispatch(addTodoItemRequest)
        axios.post('http://localhost:3333/TodoList',TodoList)
        .then(response => {
            console.log(response)
            dispatch(addTodoItemSuccess(TodoList))
        })
        .catch(err => {
            const errMsg = err.message
            dispatch(fetchTodoListFailure(errMsg))
        })
    }
}