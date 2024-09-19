import { Link } from 'react-router-dom';
import { MyButton } from '../../components/atoms/Buttons.style';
import { ErrorContainer } from '../../components/atoms/Layout.style';
import { Subtitle, Title } from '../../components/atoms/Typography.style';

const ErrorPage = () => {
    const handleReload = () => {
        window.location.reload();
    };

    return (
        <ErrorContainer>
            <Title orientation="center">Ops! Erro ao carregar a página.</Title>
            <Subtitle orientation="center">
                Não conseguimos carregar a página devido a um erro no servidor ou talvez
                esta página não exista. Tente novamente mais tarde.
            </Subtitle>

            <MyButton onPress={handleReload}>Recarregar</MyButton>
            <Link to="/">Voltar para a página inicial</Link>
        </ErrorContainer>
    );
};

export default ErrorPage;
