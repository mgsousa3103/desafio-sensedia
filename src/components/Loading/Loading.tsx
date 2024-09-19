import { LoadingContainer } from '../atoms/Layout.style';
import { Spinner } from '../atoms/Spinner.style';

const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;
