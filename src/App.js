import React, { PureComponent } from 'react';
import styled from 'styled-components';
import AddTodo from './containers/AddTodo';
import Header from './components/Header';
import Footer from './components/Footer';
import DnDBoard from './dnd/DnDBoard';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

class App extends PureComponent {
    render() {
        return (
            <Container>
                <Header />
                <AddTodo />
                <Footer />
                <DnDBoard />
            </Container>
        );
    }
}

export default App;
