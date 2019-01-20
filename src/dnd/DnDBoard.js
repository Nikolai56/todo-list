import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import DragSource from './DragSource';

export default function DnDBoard() {
    return (
        <DragDropContextProvider backend={HTML5Backend}>
            <DragSource />
            <Dustbin />
        </DragDropContextProvider>
    );
}
