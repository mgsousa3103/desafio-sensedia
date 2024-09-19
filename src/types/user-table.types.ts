import type { IPlaceholderUser } from './jsonplaceholder.types';

export type UserTableProps = {
  users: IPlaceholderUser[];
};

export type TableColumnsProps = {
  name: string;
  id: string;
  isRowHeader?: boolean;
};
