import React from 'react';
import './App.css';
import TodoListContainer from './component/TodoListContainer';
import { Provider } from 'react-redux';
import stroe from './redux/store';

function App() {
  return (
    <Provider store={stroe}>
      <div className="App">
        <TodoListContainer/>
      </div>
    </Provider>
  );
}

export default App;
