import useTodo from 'src/hooks/useTodo';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoTitle from './TodoTitle';

function TodoLayout() {
  const { todos, mutateAdd, mutateUpdate, mutateDelete } = useTodo();

  return (
    <div>
      <TodoTitle todos={todos} />
      <TodoList
        todos={todos}
        mutateUpdate={mutateUpdate}
        mutateDelete={mutateDelete}
      />
      <TodoForm mutateAdd={mutateAdd} />
    </div>
  );
}

export default TodoLayout;
