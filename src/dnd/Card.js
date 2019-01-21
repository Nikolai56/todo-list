import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
// import { removeTodo } from '../actions';

// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.

const cardStyle: React.CSSProperties = {
    fontSize: 22,
    lineHeight: 1.5,
    border: '1px solid #000',
    borderRadius: '8px',
    padding: '0 10px',
    width: 300,
    marginBottom: 12,
};

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const cardSource = {
    beginDrag(props) {
        console.log('beginDrag props', props);
        // Return the data describing the dragged item
        const item = { id: props.id };
        return item;
    },

    endDrag(props, monitor, component) {
        console.log('endDrag props', props);
        console.log('props', component);
        if (!monitor.didDrop()) {
            return;
        }

        // When dropped on a compatible target, do something
        const item = monitor.getItem();
        console.log('item', item);
        const dropResult = monitor.getDropResult();

        if (dropResult) {
            console.log('dropResult', dropResult);
            props.onDropToDustbin();
            // props.dispatch(removeTodo(item.id));
            // alert(`You dropped ${item.id} into ${dropResult.name}!`);
        }
        // CardActions.moveCardToList(item.id, dropResult.listId);
    }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging()
    };
}

function Card(props) {
    // Your component receives its own props as usual
    const { id, onClick, text, style } = props;

    // These two props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isDragging, connectDragSource } = props;

    return connectDragSource(
        <div
            onClick={onClick}
            style={{
                ...cardStyle,
                opacity: isDragging ? 0.5 : 1,
                cursor: isDragging ? 'grabbing' : 'grab',
                ...style,
            }}
        >
            {`${text} ${id}`}
        </div>
    );
}

// Export the wrapped version
export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
