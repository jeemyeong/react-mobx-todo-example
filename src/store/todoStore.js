import {observable, action} from 'mobx';
import uuid from 'node-uuid';

class todoStore {

    @observable todos = [
        {
            id: uuid(),
            text: 'First Todo',
            completed: false
        }
    ];

    @action
    add(text) {
        this.todos.push({
            text,
            id: uuid(),
            completed: false});
    }

    @action
    remove(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
}

export default todoStore;