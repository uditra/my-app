import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchTodoList} from '../redux/TodoListActions'
import InputTodo from "./inputTodo";

const TodoListContainer = () => {

    const TodoListData = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodoList())
    },[])

    return TodoListData.loading ? (
        <h1>loading data</h1>
    ) : TodoListData.error ? (
        <h1>{TodoListData.error}</h1>
    ): (
        <div>
            <h1>TodoList</h1>
            <div>
                {TodoListData && 
                TodoListData &&
                TodoListData.TodoList.map(todo => <p>{todo.title}</p>)}
            </div>
            <InputTodo/>
        </div>
    )
}
export default TodoListContainer