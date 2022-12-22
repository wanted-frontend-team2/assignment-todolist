import { useEffect, useState } from 'react';

import {
  getTodoList,
  addTodo,
  updateTodo,
  deleteTodo,
  TodoProps,
} from 'src/services/todo_service';
import { ITodo } from 'src/types/Todo';

const useTodo = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  // Todo: 여기서는 에러처리를 어떻게해야하나??
  const getTodos = async () => {
    try {
      const response = await getTodoList();
      setTodos(response);
    } catch (err) {
      alert('불러오기 실패');
      console.error(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const mutateAdd = async (payload: string) => {
    if (!payload.trim().length) return;
    try {
      const response = await addTodo({ todo: payload });
      setTodos(pre => [...pre, response.data]);
    } catch (err) {
      alert('작성 실패');
    }
  };

  const mutateUpdate = async (todoId: number, payload: TodoProps) => {
    try {
      const response = await updateTodo(todoId, payload);
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(({ id }) => id === response.data.id);

      newTodos[todoIndex] = response.data;
      setTodos(newTodos);
    } catch (err) {
      alert('수정 실패');
    }
  };

  const mutateDelete = async (id: number) => {
    try {
      await deleteTodo(id);
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
    } catch (err) {
      alert('삭제 실패');
    }
  };
  return {
    todos,
    setTodos,
    getTodos,
    mutateAdd,
    mutateUpdate,
    mutateDelete,
  };
};

export default useTodo;
