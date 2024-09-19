import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
