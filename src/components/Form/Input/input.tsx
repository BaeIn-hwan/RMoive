import * as T from "./types";
import * as S from "./styled";

const InputWrapper = () => {
  return <div></div>;
};

const InputDefault = (props: T.IPropsInput) => {
  const { type, placeholder, maxLength, disabled, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <S.Input
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      onChange={handleChange}
    />
  );
};

export default function Input(props: T.IPropsInput) {
  return <InputDefault {...props} />;
}
