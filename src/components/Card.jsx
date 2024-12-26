import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.text};
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
  max-width: 42rem;
  width: 100%;
  box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.5);

  p:first-child {
    font-size: 1.125rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  p:last-child {
    font-size: 0.875rem;
    font-style: italic;
    text-align: right;
  }
`;

