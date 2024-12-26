import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.buttonText};
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  background-color: ${props => props.theme.buttonBackground};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.buttonHover};
  }
`;

