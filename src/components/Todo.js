import React from 'react';
import PropTypes from 'prop-types';
// import Card from '../dnd/Card';
import Card from '../dnd/SortedCard';

const Todo = ({ onClick, completed, text, id, onDropToDustbin, moveCard, index }) => (
    <Card
        onClick={onClick}
        onDropToDustbin={onDropToDustbin}
        moveCard={moveCard}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
        text={text}
        id={id}
        index={index}
    />
);

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    onDropToDustbin: PropTypes.func.isRequired,
    moveCard: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
};

export default Todo;
