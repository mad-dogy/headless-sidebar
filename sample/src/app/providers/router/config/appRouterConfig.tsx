import { RouteProps } from 'react-router-dom';

import { routes } from '@/shared/constants/router';
import { HomePage } from '@/pages/HomePage/HomePage';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';
import { SettingsPage } from '@/pages/SettingsPage/SettingsPage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';
import { ProductsPage } from '@/pages/ProductsPage/ProductsPage';
import { OrdersPage } from '@/pages/OrdersPage/OrdersPage';
import { SuppliesPage } from '@/pages/SuppliesPage/SuppliesPage';

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
    path: routes.products(),
    element: <ProductsPage />
  },
  {
    path: routes.orders(),
    element: <OrdersPage />
  },
  {
    path: routes.supplies(),
    element: <SuppliesPage />
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
