import React from 'react';
import { connect } from 'react-redux';
import TodosAction from '../../../../stores/todos/TodosAction';
import { Card } from 'semantic-ui-react';
import TodoItem from './components/todo/TodoItem';
import styles from './Todos.module.scss';

const mapStateToProps = (state, ownProps) => ({
  data: state.todos.todos,
});

class Todos extends React.Component {
  componentDidMount() {
    this.props.dispatch(TodosAction.requestTodos());
  }

  render() {
    const { todos } = this.props.data;

    if (!todos) {
      return null;
    }

    return (
      <Card.Group centered={false}>
        {todos.map((todoList) => {
          return (
            <div key={todoList.id} className={styles.todoList}>
              <p className={styles.todoList__header}>{todoList.title}</p>
            </div>
            // <Card key={todoList.id}>
            //   <Card.Content>
            //     <Card.Header>{todoList.title}</Card.Header>
            //     <Card.Meta>Items:</Card.Meta>
            //     {todoList.items.map((todoItem) => (
            //       <TodoItem key={todoItem.id} todoItem={todoItem} />
            //     ))}
            //   </Card.Content>
            // </Card>
          );
        })}
      </Card.Group>
    );
  }
}

export { Todos as Unconnected };
export default connect(mapStateToProps)(Todos);
