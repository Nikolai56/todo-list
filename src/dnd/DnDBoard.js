import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import VisibleTodoList from '../containers/VisibleTodoList';

export default function DnDBoard() {
    return (
        <DragDropContextProvider backend={HTML5Backend}>
            <VisibleTodoList />
            <Dustbin />
        </DragDropContextProvider>
    );
}
