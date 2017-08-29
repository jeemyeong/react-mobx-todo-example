import React, {Component} from 'react';

// mobx-react
import {observer} from 'mobx-react';

// React-Materialize component
import {Button, Navbar, NavItem} from 'react-materialize';

// TodoList
import TodoList from './TodoList';

// css
import './TodoView.css';

@observer
class TodoView extends Component{
    render(){

        const store = this.props.store;

        return (
        <div className="TodoView">
            <Navbar className="titleBar" brand='React.js + MobX Todo App' right fixed>
                <NavItem>How-To</NavItem>
            </Navbar>
            <div className="align">
                <Button className="addButton pink" waves='light' onClick={() => store.add()}>ADD</Button>
                {store.todos.map((todo, i) => <TodoList store={store} todo={todo} />)}
            </div>
        </div>
        )
    };
};

export default TodoView;