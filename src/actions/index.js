export const addTodo = (id, text) => ({
    type: ActionTypes.ADD_TODO,
    id: id,
    text
});

export const setVisibilityFilter = filter => ({
    type: VisibilityFilters.SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = id => ({
    type: ActionTypes.TOGGLE_TODO,
    id
});

export const sortCard = (dragIndex, hoverIndex) => ({
    type: ActionTypes.SORT_TODO,
    dragIndex,
    hoverIndex
});

export const removeTodo = id => ({
    type: ActionTypes.REMOVE_TODO,
    id
});

export const moveCardToList = (id, dropResultListName) => ({
    type: ActionTypes.MOVE_CARD_TO_LIST,
    id,
    dropResultListName
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
};

export const ActionTypes = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    SORT_TODO: 'SORT_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    MOVE_CARD_TO_LIST: 'MOVE_CARD_TO_LIST',
};
