import { columns } from '../table-columns';

describe('Columns Configuration', () => {
  it('should contains the right configuration of columns', () => {
    expect(columns).toHaveLength(3);
    expect(columns).toEqual([
      { name: 'Name', id: 'name', isRowHeader: true },
      { name: 'Email', id: 'email' },
      { name: 'Phone', id: 'phone' },
    ]);
  });
});
