import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { appRouteConfig } from '../config/appRouterConfig';

export const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {appRouteConfig.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
