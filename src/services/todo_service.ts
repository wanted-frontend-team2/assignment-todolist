import axiosRequest from './request';

export interface TodoProps {
  todo: string;
  isCompleted: boolean;
}

export const getTodoList = async () => {
  try {
    const res = await axiosRequest.get(`/todos`);
    if (res.data) {
      return res.data;
    }
    return await Promise.reject(new Error('API 응답에 실패했습니다.'));
  } catch (err) {
    throw new Error(`API 응답에 실패했습니다.${err}`);
  }
};

export const addTodo = async (content: Pick<TodoProps, 'todo'>) => {
  try {
    const res = await axiosRequest.post(`/todos`, content);
    if (res) {
      return res;
    }
    return await Promise.reject(new Error('API 요청에 실패했습니다.'));
  } catch (err) {
    throw new Error(`API 응답에 문제가 있습니다. ${err}`);
  }
};

export const updateTodo = async (id: string | number, content: TodoProps) => {
  try {
    const res = await axiosRequest.put(`/todos/${id}`, content);
    if (res) {
      return res;
    }
    return await Promise.reject(new Error('API 요청에 실패했습니다.'));
  } catch (err) {
    throw new Error(`API 응답에 문제가 있습니다. ${err}`);
  }
};

export const deleteTodo = async (id: string | number) => {
  try {
    const res = await axiosRequest.delete(`/todos/${id}`);
    if (res) {
      return res;
    }
    return await Promise.reject(new Error('API 요청에 실패했습니다.'));
  } catch (err) {
    throw new Error(`API 응답에 문제가 있습니다. ${err}`);
  }
};
