import {
  ColumnProps,
  ResizableTableContainer,
  TableHeaderProps,
} from 'react-aria-components';
import { IPlaceholderUser } from '../../services/jsonplaceholder/jsonplaceholder.interface';
import {
  TableContainer,
  StyledTableHeader,
  StyledColumnTable,
  StyledTableBody,
  StyledRowTable,
  StyledCellTable,
} from './UserTable.style';

interface IColumnProps {
  name: string;
  id: string;
  isRowHeader?: boolean;
}

const UserTable = ({ users }: { users: IPlaceholderUser[] }) => {
  const columns: IColumnProps[] = [
    { name: 'Name', id: 'name', isRowHeader: true },
    { name: 'Email', id: 'email' },
    { name: 'Phone', id: 'phone' },
  ];

  return (
    <ResizableTableContainer>
      <TableContainer aria-label="Lista de usuários">
        <StyledTableHeader columns={columns}>
          {(column: any) => (
            <StyledColumnTable isRowHeader={column.isRowHeader}>
              {column.name}
            </StyledColumnTable>
          )}
        </StyledTableHeader>
        <StyledTableBody items={users}>
          {(item: any) => (
            <StyledRowTable key={item.id} columns={columns}>
              {(column: any) => (
                <StyledCellTable>{item[column.id]}</StyledCellTable>
              )}
            </StyledRowTable>
          )}
        </StyledTableBody>
      </TableContainer>
    </ResizableTableContainer>
  );
};

export default UserTable;
