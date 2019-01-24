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

const style: React.CSSProperties = {
    height: 120,
    marginTop: 'auto',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
};

const cardTarget = {
    drop() {
        return { name: 'Dustbin' };
    },
    hover(props, monitor: DropTargetMonitor, component) {
        // This is fired very often and lets you perform side effects
        // in response to the hover. You can't handle enter and leave
        // here—if you need them, put monitor.isOver() into collect() so you
        // can just use componentDidUpdate() to handle enter/leave.

        // You can access the coordinates if you need them
        const clientOffset = monitor.getClientOffset();
        const componentRect = findDOMNode(component).getBoundingClientRect();

        // You can check whether we're over a nested drop target
        const isJustOverThisOne = monitor.isOver({ shallow: true });

        // You will receive hover() even for items for which canDrop() is false
        const canDrop = monitor.canDrop();
    }
};

export interface DustbinProps {
    canDrop: boolean,
    isOver: boolean,
    connectDropTarget: ConnectDropTarget,
}

class Dustbin extends React.Component<DustbinProps> {
    render() {
        const { canDrop, isOver, connectDropTarget } = this.props;
        const isActive = canDrop && isOver;

        let backgroundColor = '#222';
        if (isActive) {
            backgroundColor = 'darkgreen';
        } else if (canDrop) {
            backgroundColor = 'darkkhaki';
        }

        return connectDropTarget(
            <div style={{ ...style, backgroundColor }}>
                {isActive ? 'Release to drop' : 'Drag a card here to remove'}
            </div>,
        );
    }
}

export default DropTarget(
    ItemTypes.CARD,
    cardTarget,
    (connect: DropTargetConnector, monitor: DropTargetMonitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
)(Dustbin);
