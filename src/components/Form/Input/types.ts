export interface IPropsInput {
  type: string;
  placeholder: string;
  maxLength: number;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
