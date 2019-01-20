// @flow
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

type Action = {+type: string};
type Dispatch = (action: Action) => any
type Props = {
    dispatch: Dispatch,
    idCounter: number
};

const AddTodo = ({ idCounter, dispatch }:Props) => {
    let input = {};

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(idCounter, input.value));
                    input.value = '';
                }}
            >
                <input autoFocus ref={node => (input = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return { idCounter: state.idCounter };
};

export default connect(mapStateToProps)(AddTodo);
