import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, removeTodo, sortCard }) => (
    <div>
        {todos.map((todo, i) => (
            <Todo
                key={todo.id}
                index={i}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
                onDropToDustbin={() => removeTodo(todo.id)}
                moveCard={(dragIndex, hoverIndex) => sortCard(dragIndex, hoverIndex)}
            />
        ))}
    </div>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    sortCard: PropTypes.func.isRequired
};

export default TodoList;
