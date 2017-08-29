import React, {Component} from 'react';

// mobx-react
import {observer} from 'mobx-react';

// React-Materialize component
import {Button, Input} from 'react-materialize';

// css
import './TodoList.css';

@observer
class TodoList extends Component {

    render() {

        const store = this.props.store;
        const todo = this.props.todo;

        return (
            <div className="TodoList">
                <strong className="todoTitle"
                    style={todo.completed
                    ? {
                        textDecoration: 'line-through',
                        color: '#ccc',
                    }
                    : null}
                    onClick={() => todo.completed = true}>{todo.text}</strong>

                <br/>
                <Input
                    className="inputText"
                    type="text"
                    defaultValue={todo.text}
                    onChange={e => {todo.text = e.target.value}}
                    onKeyDown={this.todoHandler}/>
                <Button className="removeBtn pink" onClick={() => store.remove(todo.id)}>Delete</Button>
            </div>
        )
    };
};

export default TodoList;