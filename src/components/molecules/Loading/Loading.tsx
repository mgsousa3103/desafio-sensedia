import { LoadingContainer } from '../../atoms/Layout.style';
import { Spinner } from '../../atoms/Spinner.style';

const Loading = () => {
  return (
    <LoadingContainer data-testid="loading">
      <Spinner data-testid="spinner" />
    </LoadingContainer>
  );
};

export default Loading;
