import { ResizableTableContainer } from 'react-aria-components';
import type { UserTableProps } from '../../../types/user-table.types';
import { columns } from '../../../utils/table-columns';
import {
  StyledCellTable,
  StyledColumnTable,
  StyledRowTable,
  StyledTableBody,
  StyledTableHeader,
  TableContainer,
} from '../../atoms/Table.style';
import UserNotFound from '../UserNotFound/UserNotFound';

const UserTable = ({ users }: UserTableProps) => {
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
