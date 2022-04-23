import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../../styles/base.scss';
import './app.scss';

import Spinner from '../spinner/Spinner';

const MainPage = lazy(() => import('../pages/MainPage'));

const App = () => {
  return (
    <Router>
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/weatherApp" element={<MainPage />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
