import React from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

export function ThemeToggle({ toggleTheme }) {
    return (
        <ToggleButton onClick={toggleTheme} aria-label="Alternar tema">
            <FaSun />
            <FaMoon style={{ marginLeft: '0.5rem' }} />
        </ToggleButton>
    );
}

