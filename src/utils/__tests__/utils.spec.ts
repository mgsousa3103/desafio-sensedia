import type { IPlaceholderUser } from '../../types/jsonplaceholder.types';
import type { SearchProps } from '../../types/search-bar.types';
import { mockUsersData } from '../constants';
import { areEqual, filterUsers } from '../utils';

describe('Utils Functions', () => {
  describe('filterUsers', () => {
    const users: IPlaceholderUser[] = mockUsersData;

    it('should return all users if the search term is empty', () => {
      const result = filterUsers(users, '');
      expect(result).toEqual(users);
    });

    it('should return the users that match the search term', () => {
      const result = filterUsers(users, 'john');
      expect(result).toEqual([users[0]]);
    });

    it('should return an empty array if no users match the search term', () => {
      const result = filterUsers(users, '123');
      expect(result).toEqual([]);
    });
  });

  describe('areEqual', () => {
    const onSearchMock = vi.fn();

    it('should return true if the search term and onSearch function are the same', () => {
      const prevProps: SearchProps = {
        term: 'john',
        onSearch: onSearchMock,
        ariaLabel: 'label',
        text: 'text',
      };
      const nextProps: SearchProps = {
        term: 'john',
        onSearch: onSearchMock,
        ariaLabel: 'label',
        text: 'text',
      };
      const result = areEqual(prevProps, nextProps);
      expect(result).toBeTruthy();
    });

    it('should return false if the search term and onSearch function are different', () => {
      const prevProps: SearchProps = {
        term: 'john',
        onSearch: onSearchMock,
        ariaLabel: 'label',
        text: 'text',
      };
      const nextProps: SearchProps = {
        term: 'jane',
        onSearch: onSearchMock,
        ariaLabel: 'label',
        text: 'text',
      };
      const result = areEqual(prevProps, nextProps);
      expect(result).toBeFalsy();
    });
  });
});
