import styled from "styled-components";

export const Button = styled.button.attrs({ type: "submit" })`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: #fff;
  font-size: 0;
  color: ${(props) => props.theme.colors.primary};

  svg {
    width: 24px;
  }
`;

export const Input = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 40px;
  padding: 0 54px 0 14px;
  border: 0;
  font-size: 14px;
  outline: 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &::placeholder {
    color: #aaa;
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }

  &:focus {
    box-shadow: 0px 0 8px 4px rgb(254 190 152 / 45%);
  }
`;

export const Fieldset = styled.fieldset`
  position: relative;
`;

export const Form = styled.form`
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  width: 300px;
`;
