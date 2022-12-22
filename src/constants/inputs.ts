interface Inputs {
  [key: string]: string | boolean | undefined;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  required: boolean;
  pattern?: string;
}

const inputs: Inputs[] = [
  {
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'write your email',
    errorMessage: '이메일 형식을 확인해주세요.',
    required: true,
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'write your password',
    errorMessage: '비밀번호는 8글자 이상이여야 합니다.',
    pattern: '.{8,}',
    required: true,
  },
];

export { inputs };
export type { Inputs };
