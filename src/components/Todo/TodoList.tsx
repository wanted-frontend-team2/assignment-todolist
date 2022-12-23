import { TodoProps } from 'src/services/todo_service';
import { ITodo } from 'src/types/Todo';
import TodoItem from './TodoItem';

interface Props {
  todos: ITodo[];
  mutateUpdate: (todoId: number, payload: TodoProps) => Promise<void>;
  mutateDelete: (id: number) => Promise<void>;
}

function TodoList({ todos, mutateUpdate, mutateDelete }: Props) {
  return todos.length ? (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todoData={todo}
          mutateUpdate={mutateUpdate}
          mutateDelete={mutateDelete}
        />
      ))}
    </ul>
  ) : (
    <p>저장된 할일이 없습니다.</p>
  );
}

export default TodoList;
