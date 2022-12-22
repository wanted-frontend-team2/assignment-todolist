import useLogout from 'src/hooks/useLogout';
import { ITodo } from 'src/types/Todo';

interface Props {
  todos: ITodo[];
}

function TodoTitle({ todos }: Props) {
  const { logout } = useLogout();
  const completedNum = todos.filter(todo => todo.isCompleted).length;

  return (
    <div>
      <h1>TODO`s TASKS ({completedNum})</h1>
      <button type="button" onClick={logout}>
        logout
      </button>
    </div>
  );
}

export default TodoTitle;
