import styled from "styled-components";

export const GenersText = styled.span`
  display: block;
  padding: 10px 15px;
  border-radius: 18px;
  background-color: #fff;
  font-size: 14px;
  line-height: 1;
`;

export const GenersItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  input {
    &:checked ~ ${GenersText} {
      background-color: ${(props) => props.theme.colors.primary};
      color: #fff;
    }
  }
`;
export const GenersList = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`;
