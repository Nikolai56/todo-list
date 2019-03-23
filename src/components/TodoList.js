import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Todo from './Todo';

const Container = styled.div`
    overflow-y: auto;
    padding: 0 8px;
    margin-left: 4px;
    margin-right: 4px;
    width: 320px;
`;

const TodoList = ({ todos, toggleTodo, removeTodo, sortCard, style }) => {
    return (
        <Container data-testid="todo-list" style={style}>
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
        </Container>
    );
};


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
    sortCard: PropTypes.func.isRequired,
    style: PropTypes.object,
};

export default TodoList;
