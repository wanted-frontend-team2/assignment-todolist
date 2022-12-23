import { TodoProps } from 'src/services/todo_service';
import { ITodo } from 'src/types/Todo';
import TodoItem from './TodoItem';
import * as S from './index.style';

interface Props {
  todos: ITodo[];
  mutateUpdate: (todoId: number, payload: TodoProps) => Promise<void>;
  mutateDelete: (id: number) => Promise<void>;
}

function TodoList({ todos, mutateUpdate, mutateDelete }: Props) {
  return todos.length ? (
    <S.ListBox>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todoData={todo}
          mutateUpdate={mutateUpdate}
          mutateDelete={mutateDelete}
        />
      ))}
    </S.ListBox>
  ) : (
    <S.ListNone>저장된 할일이 없습니다.</S.ListNone>
  );
}

export default TodoList;
