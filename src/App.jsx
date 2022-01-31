import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Home } from './pages';
import { Navigationbar } from './components';

export const App = () => {
  return (
    <Router>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};
