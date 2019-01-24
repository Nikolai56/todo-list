// @flow

import * as React from 'react';
import { findDOMNode } from 'react-dom';
import {
    DragSource,
    DropTarget,
    ConnectDropTarget,
    ConnectDragSource,
    DropTargetMonitor,
    DropTargetConnector,
    DragSourceConnector,
    DragSourceMonitor,
} from 'react-dnd';
import ItemTypes from './ItemTypes';

const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
};

const cardSource = {
    beginDrag(props: CardProps) {
        return {
            id: props.id,
            index: props.index,
        };
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
            if (dropResult.name === 'Dustbin') {
                props.onDropToDustbin();
            }

            // props.dispatch(removeTodo(item.id));
            // alert(`You dropped ${item.id} into ${dropResult.name}!`);
        }
        // CardActions.moveCardToList(item.id, dropResult.listId);
    }
};

const cardTarget = {
    hover(props: CardProps, monitor: DropTargetMonitor, component: Card | null) {
        if (!component) {
            return null;
        }
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Determine rectangle on screen
        const hoverBoundingRect = (findDOMNode(
            component,
        )).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = (clientOffset).y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        // Time to actually perform the action
        props.moveCard(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    },
};

export interface CardProps {
    id: any,
    text: string,
    index: number,
    onClick: () => void,
    moveCard: (dragIndex: number, hoverIndex: number) => void
}

interface CardSourceCollectedProps {
    isDragging: boolean,
    connectDragSource: ConnectDragSource
}

interface CardTargetCollectedProps {
    connectDropTarget: ConnectDropTarget
}

class Card extends React.Component<
    CardProps & CardSourceCollectedProps & CardTargetCollectedProps
    > {
    render() {
        const {
            text,
            isDragging,
            connectDragSource,
            connectDropTarget,
            onClick,
            index,
        } = this.props;
        const opacity = isDragging ? 0 : 1;

        return connectDragSource(
            connectDropTarget(
                <div
                    onClick={onClick}
                    style={{
                        ...style,
                        cursor: isDragging ? 'grabbing' : 'grab',
                        opacity
                    }}
                >
                    {index+1} {text}
                </div>
            ),
        );
    }
}

export default DropTarget<CardProps, CardTargetCollectedProps>(
    ItemTypes.CARD,
    cardTarget,
    (connect: DropTargetConnector) => ({
        connectDropTarget: connect.dropTarget(),
    }),
)(
    DragSource<CardProps, CardSourceCollectedProps>(
        ItemTypes.CARD,
        cardSource,
        (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    )(Card),
);
