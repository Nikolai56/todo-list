import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from './Card';
import {DropTarget, DropTargetConnector, DropTargetMonitor} from "react-dnd";
import ItemTypes from "./ItemTypes";

const containerStyle: React.CSSProperties = {
    backgroundColor: 'lightgray',
    overflowY: 'auto',
    padding: '0 8px',
    marginLeft: 4,
    marginRight: 4,
    width: 320,
};

const cardTarget = {
    drop(props) {
        return { name: props.listName };
    }
};

const TodoList = ({ todos, style, listName, connectDropTarget, dispatch }) => {
    return connectDropTarget(
        <div data-testid={listName} style={{ ...containerStyle, style }}>
            <h2>{listName}</h2>
            {todos.map((todo, i) => (
                <Card
                    key={todo.id}
                    index={i}
                    dispatch={dispatch}
                    {...todo}
                />
            ))}
        </div>
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
    listName: PropTypes.string.isRequired,
    style: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos.filter(todo => todo.listName === ownProps.listName)
});

export default connect(mapStateToProps)(DropTarget(
    ItemTypes.CARD,
    cardTarget,
    (connect: DropTargetConnector, monitor: DropTargetMonitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
)(TodoList));
