import { UserNotFoundContainer } from './UserNotFound.style'

const UserNotFound = () => {
    return (
        <UserNotFoundContainer>
            <h2>Sem resultados!</h2>
            <p>Não encontramos nenhum resultado com os termos da sua busca. Que tal tentar algo diferente?</p>
        </UserNotFoundContainer>
    )
}

export default UserNotFound