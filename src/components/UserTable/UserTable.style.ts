import {
    Cell,
    Column,
    Row,
    Table,
    TableBody,
    TableHeader,
} from 'react-aria-components';
import styled from 'styled-components';

export const TableContainer = styled(Table)`
    width: 100%;

    /* display: flex;
    flex-direction: column;
    gap: 1rem; */
`;

export const StyledTableHeader = styled(TableHeader)`
    width: 100%;
    padding: 1rem;
    text-align: left;

    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
    gap: 0.5rem;

    border-radius: 0.5rem;
    background: var(--Royal-Purple-Light);
    `;

export const StyledColumnTable = styled(Column)`
    color: var(--White);
`;

export const StyledTableBody = styled(TableBody)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledRowTable = styled(Row)`
    width: 100%;
    padding: 0.75rem 0.875rem;

    display: flex;
    gap: 0.875rem;
    align-self: stretch;

    border-bottom: 1px solid #EDEDED;
`;

export const StyledCellTable = styled(Cell)`
    width: 100%;
    font-family:"Montserrat", sans-serif;
    font-size: 0.75rem;
    font-style:normal;
    font-weight: 500;
    color: var(--Strong-Grey);
    line-height: 1.5rem;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    flex: 1 0 0;
    overflow: hidden;
    text-overflow:ellipsis;
`;
