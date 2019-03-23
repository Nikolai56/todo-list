// @flow

import * as React from 'react';
import { findDOMNode } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
import * as TodoActionCreators from '../actions';

const baseStyle = {
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
        const CardActions = bindActionCreators(TodoActionCreators, props.dispatch);
        // console.log('endDrag props', props);
        // console.log('endDrag component', component);
        if (!monitor.didDrop()) {
            return;
        }

        // When dropped on a compatible target, do something
        const item = monitor.getItem();
        // console.log('item', item);
        const dropResult = monitor.getDropResult();

        if (dropResult) {
            console.log('dropResult', dropResult);
            // if (dropResult.name === 'Dustbin') {
            //     // props.onDropToDustbin();
            //     // CardActions.moveCardToList(item.id, dropResult.name);
            // }
            CardActions.moveCardToList(item.id, dropResult.name);
            // props.dispatch(removeTodo(item.id));
            // alert(`You dropped ${item.id} into ${dropResult.name}!`);
        }
        // CardActions.moveCardToList(item.id, dropResult.listId);
    }
};

const cardTarget = {
    drop() {
        return { name: 'TodoList' };
    },
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

export type CardProps = {
    id: number,
    style: Object,
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

    // constructor(props) {
    //     super(props)
    //
    //     const { dispatch } = props
    //     console.log('constructor Card', dispatch);
    //
    //     // Here's a good use case for bindActionCreators:
    //     // You want a child component to be completely unaware of Redux.
    //     // We create bound versions of these functions now so we can
    //     // pass them down to our child later.
    //
    //     this.boundActionCreators = bindActionCreators(TodoActionCreators, dispatch)
    //     console.log('this.boundActionCreators', this.boundActionCreators)
    //     // {
    //     //   addTodo: Function,
    //     //   removeTodo: Function
    //     // }
    // }

    render() {
        const {
            text,
            isDragging,
            connectDragSource,
            connectDropTarget,
            onClick,
            index,
            style
        } = this.props;
        // console.log('class Card', this.props.dispatch);
        const opacity = isDragging ? 0 : 1;

        return connectDragSource(
            connectDropTarget(
                <div
                    onClick={onClick}
                    style={{
                        ...baseStyle,
                        cursor: isDragging ? 'grabbing' : 'grab',
                        opacity,
                        ...style
                    }}
                >
                    {index+1} {text}
                </div>
            ),
        );
    }
}

export default connect()(DropTarget<CardProps, CardTargetCollectedProps>(
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
));
