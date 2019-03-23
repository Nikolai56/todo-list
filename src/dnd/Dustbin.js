import * as React from 'react';
import {
    DropTarget,
    ConnectDropTarget,
    DropTargetMonitor,
    DropTargetConnector,
} from 'react-dnd';
import ItemTypes from './ItemTypes';

const style: React.CSSProperties = {
    height: 80,
    marginTop: 'auto',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    flexShrink: 0,
};

const cardTarget = {
    drop() {
        return { name: 'Dustbin' };
    }
};

export interface DustbinProps {
    canDrop: boolean,
    isOver: boolean,
    connectDropTarget: ConnectDropTarget,
}

class Dustbin extends React.Component<DustbinProps> {
    render() {
        const { canDrop, isOver, connectDropTarget, children } = this.props;
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
                {children}
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
