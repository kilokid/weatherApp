import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '../../styles/base.scss';
import './app.scss';

import Spinner from '../spinner/Spinner';

const MainPage = lazy(() => import('../pages/MainPage'));
const WeatherInfo = lazy(() => import('../pages/WeatherInfo'));

const App = () => {
  const [cityInfo, setCityInfo] = useState('');

  const getCityInfo = ( cityInfo ) => {
    setCityInfo(cityInfo);
  }

  console.log(cityInfo)
  
  return (
    <Router>
      <main>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/weatherApp" element={<MainPage getCityInfo={getCityInfo} />} />
            <Route path="/weatherApp/info" element={<WeatherInfo weatherInfo={cityInfo} />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
