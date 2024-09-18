import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRoutes from './routes';
import GlobalStyle from './styles/global';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppRoutes />
    </QueryClientProvider>
  );
};

export default App;
