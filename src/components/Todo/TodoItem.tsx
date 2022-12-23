import { useEffect, useRef } from 'react';

import useBoolean from 'src/hooks/useBoolean';
import useValue from 'src/hooks/useValue';
import { TodoProps } from 'src/services/todo_service';
import { ITodo } from 'src/types/Todo';
import { RiDeleteBinLine } from 'react-icons/ri';
import { TfiPencil } from 'react-icons/tfi';
import { MdOutlineCancel, MdOutlineCheckCircle } from 'react-icons/md';
import * as S from './index.style';

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
  };
  const onClickUpdateIsCompleted = () =>
    mutateUpdate(id, { todo: value, isCompleted: !isCompleted });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isUpdate]);

  useEffect(() => {
    toggle();
  }, [todo]);

  return (
    <S.List>
      <div>
        <label
          htmlFor={`checkbox${id}`}
          onChange={!isUpdate ? onClickUpdateIsCompleted : () => {}}
        >
          <input
            type="checkbox"
            id={`checkbox${id}`}
            checked={isCompleted}
            onChange={!isUpdate ? () => {} : onClickUpdateIsCompleted}
          />
          {isUpdate ? (
            <input
              ref={inputRef}
              name="todo"
              value={value}
              onChange={onChange}
            />
          ) : (
            <span>{todo}</span>
          )}
        </label>
      </div>
      <S.ListBtn>
        {!isUpdate ? (
          <>
            <button type="button" onClick={toggle}>
              <TfiPencil />
            </button>
            <button type="submit" onClick={() => mutateDelete(id)}>
              <RiDeleteBinLine />
            </button>
          </>
        ) : (
          <>
            <button type="submit" onClick={onClickUpdate}>
              <MdOutlineCheckCircle />
            </button>
            <button type="button" onClick={onClickCancle}>
              <MdOutlineCancel />
            </button>
          </>
        )}
      </S.ListBtn>
    </S.List>
  );
}

export default TodoItem;
