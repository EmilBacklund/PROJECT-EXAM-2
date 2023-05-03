import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import DreamStaysPage from '../pages/FavoritePage/DreamStaysPage';

function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/dreamstays' element={<DreamStaysPage />} />
        <Route path='/favorites' element={<DreamStaysPage />} />
      </Routes>
    </>
  );
}

export default Router;
