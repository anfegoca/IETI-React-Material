import React from 'react';
import { Todo } from './Todo'

export class TodoList extends React.Component {

    

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <th><Todo key={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate} /></th>
            );
        });

        return (
            <div>
                <h1>To do</h1>
                <table>
                    
                    
                    <tbody>
                    <tr>
                        {todoList}
                    </tr>
                </tbody>

                </table>
            </div>
        );


    }

}