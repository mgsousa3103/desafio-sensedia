import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Error from './components/Error/Error';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
