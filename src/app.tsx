import { Routes, Route } from 'react-router-dom';
import { Paths } from './constants';
import { MainLayout } from './layouts';
import { HomePage, NotFoundPage, ProfilePage, LoginPage, ProductPage } from './pages';

import './styles.css';

export default function App() {
  // const [data, loading, error] = useQuery(ApiEndpoint.Posts);

  return (
    <Routes>
      <Route path={Paths.Root} element={<MainLayout />}>
        <Route path={Paths.Home} element={<HomePage />} />
        <Route path={Paths.Product} element={<ProductPage />} />
        <Route path={Paths.Profile} element={<ProfilePage />} />
        <Route path={Paths.CatchAll} element={<NotFoundPage />} />
        <Route path={Paths.Login} element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
