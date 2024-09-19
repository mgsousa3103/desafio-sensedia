import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/Homepage/Homepage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

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
