import { BsCheckCircleFill } from 'react-icons/bs';

interface Props {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  errorMessage: string;
  required: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  focused: boolean;
  setFocused: (focused: boolean) => void;
}

export default function SignInput(props: Props) {
  const {
    id,
    name,
    errorMessage,
    value,
    onChange,
    focused,
    setFocused,
    ...inputProps
  } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  const title = name.replace(/^[a-z]/, char => char.toUpperCase());
  return (
    <div className="w-full flex flex-col justify-center items-start mb-2">
      <label className="mb-1" htmlFor={id}>
        <h1 className="mb-2">{title}</h1>
        <input
          id={id}
          className="peer pl-2 mr-2 inline w-[270px] md:w-72 font-light mb-2 outline-0 pl-3shadow-md h-10 rounded border-b-2"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onInvalid={e => e.preventDefault()}
          value={value}
        />
        <BsCheckCircleFill
          className="inline peer-invalid:invisible visible text-green-500"
          size={20}
        />
        <span
          className={`${
            focused && 'peer-invalid:visible'
          } text-red-400 text-sm mb-2 block invisible `}
        >
          {errorMessage}
        </span>
      </label>
    </div>
  );
}
