import { Route, Routes } from 'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<AllMeetups />} />
        <Route path={'/favorites'} element={<Favorites />} />
        <Route path={'/new-meetup'} element={<NewMeetup />} />
      </Routes>
    </Layout>
  );
}

export default App;
