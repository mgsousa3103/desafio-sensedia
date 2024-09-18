import { ResizableTableContainer } from 'react-aria-components';
import type { IPlaceholderUser } from '../../services/jsonplaceholder/jsonplaceholder.type';
import UserNotFound from '../UserNotFound/UserNotFound';
import {
  StyledCellTable,
  StyledColumnTable,
  StyledRowTable,
  StyledTableBody,
  StyledTableHeader,
  TableContainer,
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
        <StyledTableBody
          items={users}
          renderEmptyState={() => <UserNotFound />}
        >
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
