import { LuMail, LuPhone, LuUser } from 'react-icons/lu';
import type { IPlaceholderUser } from '../../services/jsonplaceholder/jsonplaceholder.type';
import { CardContainer, CardRow, CardText } from './UserCard.style';

const UserCard = ({ user }: { user: IPlaceholderUser }) => {
  return (
    <CardContainer>
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
