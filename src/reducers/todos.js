import update from 'immutability-helper';
import { ActionTypes } from '../actions';

const todos = (state = [], action) => {
    console.log('reducer action', action);
    switch (action.type) {
    case ActionTypes.ADD_TODO:
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false,
                listName: 'TodoList'
            }
        ];
    case ActionTypes.MOVE_CARD_TO_LIST:
        return state.map(
            todo =>
                todo.id === action.id ? { ...todo, listName: action.dropResultListName } : todo
        );
    case ActionTypes.TOGGLE_TODO:
        return state.map(
            todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
    case ActionTypes.SORT_TODO: {
        const {dragIndex, hoverIndex} = action;
        const dragCard = state[dragIndex];
        return update(state, {
            $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        });
    }
    case ActionTypes.REMOVE_TODO:
        return state.filter(todo => todo.id !== action.id);
    default:
        return state;
    }
};

export default todos;
