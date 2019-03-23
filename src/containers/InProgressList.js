import { connect } from 'react-redux';
import { toggleTodo, removeTodo, sortCard } from '../actions';
import TodoList from '../components/TodoList';


const mapStateToProps = state => ({
    // todos: state.todos.filter(todo => todo.listName === 'InProgressList')
    todos: state.todos.filter(todo => todo.listName === 'Dustbin')
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    removeTodo: id => dispatch(removeTodo(id)),
    sortCard: (dragIndex, hoverIndex) => dispatch(sortCard(dragIndex, hoverIndex)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
