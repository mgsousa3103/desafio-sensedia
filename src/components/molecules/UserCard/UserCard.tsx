import { LuMail, LuPhone, LuUser } from 'react-icons/lu';
import type { UserCardProps } from '../../../types/user-card.types';
import { CardContainer, CardRow, CardText } from '../../atoms/Card.style';

const UserCard = ({ user }: UserCardProps) => {
  return (
    <CardContainer data-testid="user-card">
      <CardRow>
        <LuUser className="brand-orange" size={26} />
        <CardText type="name">{user.name}</CardText>
      </CardRow>
      <CardRow>
        <LuMail className="brand-orange" size={26} />
        <CardText type="email">{user.email}</CardText>
      </CardRow>
      <CardRow>
        <LuPhone className="brand-orange" size={26} />
        <CardText type="phone">{user.phone}</CardText>
      </CardRow>
    </CardContainer>
  );
};

export default UserCard;
