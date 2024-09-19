import { TableColumnsProps } from "../types/user-table.types";

export const columns: TableColumnsProps[] = [
    { name: 'Name', id: 'name', isRowHeader: true },
    { name: 'Email', id: 'email' },
    { name: 'Phone', id: 'phone' },
];