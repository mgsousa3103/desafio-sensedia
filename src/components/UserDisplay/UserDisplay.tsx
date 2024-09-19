import UserCard from '../../components/UserCard/UserCard';
import UserNotFound from '../../components/UserNotFound/UserNotFound';
import UserTable from '../../components/UserTable/UserTable';
import {
  CardsGrid,
  SectionColumn,
  SectionRow,
} from '../../components/atoms/Layout.style';
import type { IPlaceholderUser } from '../../types/types';

const UserDisplay = ({
  users,
  isCardView,
}: { users: IPlaceholderUser[]; isCardView: boolean }) => {
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
