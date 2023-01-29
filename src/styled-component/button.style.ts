import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.secondary};
  font-size: 18px;
  margin: 10px;
  padding: 15px 20px;
  cursor: pointer;
  border: none;

  &:hover {
    color: ${props => props.theme.colors.border};
  }
`;

export const BorderedButton = styled(Button)`
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 5px;
`;

export const UnderLinedButton = styled(Button)`
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

export const BorderLessButton = styled(Button)`
  border: none;
`;
