import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.theme.colors.main};
  color: ${props => props.theme.colors.secondary};
  font-size: 18px;
  margin: 10px;
  padding: 15px 20px;
  border: 2px solid #4eb151;
  border-radius: 5px;    
`;
