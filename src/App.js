import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Header from './components/Header';


const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    border: none;
    flex: 1;
    font-size: 20px;
    outline: none;
    padding: 0;
    line-height: 2.4rem;
`;

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();

        this.state = {
            text: '',
        };
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    onChangeInputText = event =>
        this.setState({text: event.target.value});

    render() {
        return (
            <Container>
                <Header />
                <Input
                    type="text"
                    ref={this.inputRef}
                    placeholder="your todo text"
                    value={this.state.text}
                    onChange={this.onChangeInputText}
                    // onFocus={this.handleInputFocus}
                    // onBlur={this.handleInputBlur}
                />
                <span>{this.state.text}</span>
            </Container>
        );
    }
}

export default App;