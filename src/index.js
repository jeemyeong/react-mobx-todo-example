import React from 'react';
import ReactDOM from 'react-dom';

// component
import TodoView from './component/TodoView';

// store
import todoStore from './store/todoStore';

const store = new todoStore();

ReactDOM.render(
    <TodoView store={store}/>, document.getElementById('root'));
