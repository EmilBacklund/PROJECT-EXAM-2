import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import DreamStaysPage from '../pages/FavoritePage/DreamStaysPage';
import RegisterVenuePage from '../pages/RegisterVenuePage/RegisterVenuePage';
import Stage1 from '../pages/RegisterVenuePage/Stage1';
import Stage2 from '../pages/RegisterVenuePage/Stage2';
import Stage3 from '../pages/RegisterVenuePage/Stage3';
import Stage4 from '../pages/RegisterVenuePage/Stage4';
import Stage5 from '../pages/RegisterVenuePage/Stage5';
import Stage6 from '../pages/RegisterVenuePage/Stage6';

function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route
          path='/dreamstays'
          element={<DreamStaysPage />}
        />
        <Route
          path='/favorites'
          element={<DreamStaysPage />}
        />
        <Route
          path='/registerVenue'
          element={<RegisterVenuePage />}
        >
          <Route
            path='essential-information'
            element={<Stage1 />}
          />
          <Route
            path='title-and-description'
            element={<Stage2 />}
          />
          <Route path='location' element={<Stage3 />} />
          <Route path='amenities' element={<Stage4 />} />
          <Route path='pricing' element={<Stage5 />} />
          <Route path='images' element={<Stage6 />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
