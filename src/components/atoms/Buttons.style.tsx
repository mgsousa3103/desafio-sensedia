import { ToggleButton, Button } from 'react-aria-components';
import styled from 'styled-components';

export const Toggled = styled(ToggleButton)`
    background-color: var(--White);
    border: none;
    border-radius: 0.5rem;
    padding: 0.375rem  0.625rem;
    cursor: pointer;
`;


export const MyButton = styled(Button)`
    background-color: var(--Royal-Purple-Light);
    color: var(--White);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
`;
