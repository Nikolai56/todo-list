import React from 'react';
import PropTypes from 'prop-types';
import Card from '../dnd/Card';

const Todo = ({ onClick, completed, text, id, onDropToDustbin }) => (
    <Card
        onClick={onClick}
        onDropToDustbin={onDropToDustbin}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
        text={text}
        id={id}
    />
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    onDropToDustbin: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};

export default Todo;
