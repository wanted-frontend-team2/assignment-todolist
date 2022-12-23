import { FormEvent } from 'react';
import useValue from 'src/hooks/useValue';
import * as S from './index.style';

interface Props {
  mutateAdd: (payload: string) => void;
}

function TodoForm({ mutateAdd }: Props) {
  const { value, onChange, reset } = useValue();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAdd(value);
    reset();
  };

  return (
    <S.FormBox onSubmit={onSubmit}>
      <label htmlFor="title">
        <input
          id="title"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="할일을 입력하세요."
        />
      </label>
      <button type="submit">New Task</button>
    </S.FormBox>
  );
}

export default TodoForm;
