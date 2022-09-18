import { ChangeEvent, FC } from "react";
interface IProps {
  value: string;
  onChange?: ({ value, name }: { value: string; name: string }) => void;
  name: string;
  className?: string;
}

const CustomInput: FC<IProps> = ({
  value,
  onChange,
  name,
  className,
}: IProps) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange({ value: event.target.value, name });
    }
  };
  return (
    <div className={`input ${className}`}>
      <input onChange={changeHandler} value={value} name={name} />
    </div>
  );
};

export default CustomInput;
