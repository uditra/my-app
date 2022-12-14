import {
    EDIT,
    FETCH_TODOLIST_SUCCESS,
    FETCH_TODOLIST_FAILURE,
    ADD_TODOITEM_SUCCESS,
    ADD_TODOITEM_FAILURE,
    DELETE
} from "./TodoListType"
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

export const editItem = (todoItem) => {
    return {
        type: EDIT,
        payload: todoItem 
    }
}

export const deleteItem = (todoItem) => {
    return {
        type: DELETE,
        payload: todoItem 
    }
}