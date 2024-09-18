import { IPlaceholderUser } from '../../services/jsonplaceholder/jsonplaceholder.interface';
import { CardContainer, CardRow, CardText } from './UserCard.style';
import { LuUser, LuMail, LuPhone } from 'react-icons/lu';

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
