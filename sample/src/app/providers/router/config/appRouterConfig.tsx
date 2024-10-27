import { createBrowserRouter, RouteProps } from 'react-router-dom';

import { routes } from '@/shared/constants/router';
import { HomePage } from '@/pages/HomePage/HomePage';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';
import { BookmarkPage } from '@/pages/BookmarkPage/BookmarkPage';
import { SettingsPage } from '@/pages/SettingsPage/SettingsPage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: routes.home(),
    element: <HomePage />
  },
  {
    path: routes.profile(),
    element: <ProfilePage />
  },

  {
    path: routes.bookmark(),
    element: <BookmarkPage />
  },
  {
    path: routes.settings(),
    element: <SettingsPage />
  },
  {
    path: routes.notFound(),
    element: <NotFoundPage />
  }
]);


export const appRouteConfig: Array<RouteProps> = [
  {
    path: routes.home(),
    element: <HomePage />
  },
  {
    path: routes.profile(),
    element: <ProfilePage />
  },

  {
    path: routes.bookmark(),
    element: <BookmarkPage />
  },
  {
    path: routes.settings(),
    element: <SettingsPage />
  },
  {
    path: routes.notFound(),
    element: <NotFoundPage />
  }
];
