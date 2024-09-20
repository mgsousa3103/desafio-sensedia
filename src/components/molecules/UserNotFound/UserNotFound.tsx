import { UserNotFoundContainer } from '../../atoms/Layout.style';
import { Subtitle, Title } from '../../atoms/Typography.style';

const UserNotFound = () => {
  return (
    <UserNotFoundContainer data-testid="user-not-found">
      <Title orientation="center">Sem resultados!</Title>
      <Subtitle orientation="center">
        Não encontramos nenhum resultado com os termos da sua busca. Que tal
        tentar algo diferente?
      </Subtitle>
    </UserNotFoundContainer>
  );
};

export default UserNotFound;
