import { FormEvent } from 'react';

import useValue from 'src/hooks/useValue';

interface Props {
  mutateAdd: (payload: string) => void;
}

// 🔴 스타일 에러를 피하기 위해 임시로 해놓은 거입니다. 제거하셔야합니다!
const styles: any = {};

function TodoForm({ mutateAdd }: Props) {
  const { value, onChange, reset } = useValue();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAdd(value);
    reset();
  };

  return (
    <form className={styles.formBox} onSubmit={onSubmit}>
      <div className={styles.input}>
        <label htmlFor="title">
          <input
            id="title"
            type="text"
            value={value}
            onChange={onChange}
            // placeholder={isUpdate ? '할일을 수정하세요.' : '할일을 입력하세요.'}
            placeholder="할일을 입력하세요."
          />
        </label>
      </div>
      <div className={styles.createBtn}>
        <button type="submit">
          {/* {isUpdate ? 'Update' : 'New Task'} */}
          New Task
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
