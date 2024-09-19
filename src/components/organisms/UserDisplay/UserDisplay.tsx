import { IPlaceholderUser } from '../../../types/jsonplaceholder.types';
import type { UserDisplayProps } from '../../../types/user-display.types';
import { CardsGrid } from '../../atoms/Card.style';
import { SectionColumn, SectionRow } from '../../atoms/Layout.style';
import UserCard from '../../molecules/UserCard/UserCard';
import UserNotFound from '../../molecules/UserNotFound/UserNotFound';
import UserTable from '../../molecules/UserTable/UserTable';

const UserDisplay = ({ users, isCardView }: UserDisplayProps) => {
  if (!users.length) {
    return (
      <SectionRow>
        <SectionColumn>
          <UserNotFound />
        </SectionColumn>
      </SectionRow>
    );
  }

  return (
    <SectionRow>
      <SectionColumn>
        {isCardView ? (
          <CardsGrid>
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </CardsGrid>
        ) : (
          <UserTable users={users} />
        )}
      </SectionColumn>
    </SectionRow>
  );
};

export default UserDisplay;
