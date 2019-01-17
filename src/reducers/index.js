import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import idCounter from './idCounter';

export default combineReducers({
    todos,
    visibilityFilter,
    idCounter
});
