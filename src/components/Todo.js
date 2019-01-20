import React from 'react';
import PropTypes from 'prop-types';
import Card from '../dnd/Card';

const Todo = ({ onClick, completed, text, id }) => (
    <Card
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
        text={text}
        id={id}
    />
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
