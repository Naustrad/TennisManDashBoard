import './App.css';
import { Route, Routes } from 'react-router-dom';
import {
  HOME_ROUTE,
  PLAYER_DETAILS_ROUTE
} from './routes';
import HomeView from './views/home';
import PlayerView from './views/player';
import Layout from './components/layout/layout';

function App() {
  return <Layout>
    <Routes>
      <Route path={HOME_ROUTE} element={<HomeView />} />
      <Route path={PLAYER_DETAILS_ROUTE} element={<PlayerView />} />
    </Routes>
  </Layout>
}

export default App;
