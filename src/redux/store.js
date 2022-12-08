import { createStore , applyMiddleware } from "redux"
import reducer from "./TodoListReducer"
import thunk from "redux-thunk"

const stroe = createStore(reducer,applyMiddleware(thunk))

export default stroe