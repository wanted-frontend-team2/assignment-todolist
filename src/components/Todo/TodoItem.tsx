/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useRef } from 'react';

import useBoolean from 'src/hooks/useBoolean';
import useValue from 'src/hooks/useValue';
import { TodoProps } from 'src/services/todo_service';
import { ITodo } from 'src/types/Todo';

interface Props {
  todoData: ITodo;
  mutateUpdate: (todoId: number, payload: TodoProps) => Promise<void>;
  mutateDelete: (id: number) => Promise<void>;
}

function TodoItem({ todoData, mutateUpdate, mutateDelete }: Props) {
  const { id, todo, isCompleted } = todoData;
  const { value, onChange, reset } = useValue(todo);
  const { isBoolean: isUpdate, toggle } = useBoolean();
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickCancle = () => {
    reset();
    toggle();
  };
  const onClickUpdate = () => {
    if (value === todo) {
      toggle();
      return;
    }
    mutateUpdate(id, { todo: value, isCompleted });
    toggle();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isUpdate]);

  return (
    <li>
      <div>
        <label
          htmlFor={`checkbox${id}`}
          onClick={() => {
            mutateUpdate(id, { todo: value, isCompleted: !isCompleted });
          }}
        >
          {isUpdate ? (
            <input
              ref={inputRef}
              name="todo"
              value={value}
              onChange={onChange}
            />
          ) : (
            <span>{value}</span>
          )}
          <input
            type="checkbox"
            id={`checkbox${id}`}
            defaultChecked={isCompleted}
          />
        </label>
      </div>
      <div>
        {!isUpdate ? (
          <>
            <button type="button" onClick={toggle}>
              펜슬
            </button>
            <button type="submit" onClick={() => mutateDelete(id)}>
              휴지통
            </button>
          </>
        ) : (
          <>
            <button type="submit" onClick={onClickUpdate}>
              제출
            </button>
            <button type="button" onClick={onClickCancle}>
              취소
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;