export const addTodo = (id, text) => ({
    type: 'ADD_TODO',
    id: id,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const sortCard = (dragIndex, hoverIndex) => ({
    type: ActionTypes.SORT_TODO,
    dragIndex,
    hoverIndex
});

export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const ActionTypes = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    SORT_TODO: 'SORT_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
};
