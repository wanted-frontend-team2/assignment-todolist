import useLogout from 'src/hooks/useLogout';
import { ITodo } from 'src/types/Todo';
import * as S from './index.style';

interface Props {
  todos: ITodo[];
}

function TodoTitle({ todos }: Props) {
  const { logout } = useLogout();
  const completedNum = todos.filter(todo => todo.isCompleted).length;

  return (
    <S.Title>
      <h1>TODO`s TASKS ({completedNum})</h1>
      <button type="button" onClick={logout}>
        LOGOUT
      </button>
    </S.Title>
  );
}

export default TodoTitle;
