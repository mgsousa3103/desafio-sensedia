import {
  Table,
  TableBody,
  TableHeader,
  Column,
  Row,
  Cell,
} from 'react-aria-components';
import styled from 'styled-components';

export const TableContainer = styled(Table)`
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;
`;

export const StyledTableHeader = styled(TableHeader)`
    width: 100%;
    padding: 16px;
    text-align: left;

    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
    gap: 16px;

    border-radius: 20px;
    background: var(--Purple-Light);
    color: var(--White);
`;

export const StyledColumnTable = styled(Column)`
`;

export const StyledTableBody = styled(TableBody)`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledRowTable = styled(Row)`
    width: 100%;
    display: flex;
    padding: 12px 16px;
    align-items: center;
    gap: 16px;
    align-self: stretch;

    border-bottom: 1px solid #EDEDED;
`;

export const StyledCellTable = styled(Cell)`
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    flex: 1 0 0;

    overflow: hidden;
    color: var(--Neutral-400, #5B5B5B);
    text-overflow:ellipsis;
    font-family:"Rotobo", sans-serif;
    font-size:14px;
    font-style:normal;
    font-weight: 500;
    line-height: 23.2px
`;
