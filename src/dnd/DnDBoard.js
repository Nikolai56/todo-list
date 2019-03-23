import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import styled from 'styled-components';
import Dustbin from './Dustbin';
import GenericList from './GenericList';
import VisibleTodoList from '../containers/VisibleTodoList';
import InProgressList from '../containers/InProgressList';


const Row = styled.div`
  display: flex;
  flex: 1;
`;

export default function DnDBoard() {
    return (
        <DragDropContextProvider backend={HTML5Backend}>
            <Row>
                <VisibleTodoList style={{
                    backgroundColor: 'lightseagreen'
                }} />
                <InProgressList style={{
                    backgroundColor: 'lightblue'
                }} />
                <GenericList
                    listName="TodoList"
                />
                <GenericList
                    listName="InProgressList"
                />
                <GenericList
                    listName="Dustbin"
                />
            </Row>
            <Dustbin />
        </DragDropContextProvider>
    );
}
