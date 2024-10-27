const getRouteHome = () => '/';
const getRouteProfile = () => '/profile';
const getRouteInventory = () => '/inventory';
const getRouteProducts = () => '/inventory/products';
const getRouteOrders = () => '/inventory/orders';
const getRouteSupplies = () => '/inventory/supplies';

const getRouteSettings = () => '/settings';
const getRouteNotFound = () => '*';

export const routes = {
  home: getRouteHome,
  profile: getRouteProfile,
  inventory: getRouteInventory,
  products: getRouteProducts,
  orders: getRouteOrders,
  supplies: getRouteSupplies,
  settings: getRouteSettings,
  notFound: getRouteNotFound
};

export type RouteName = keyof typeof routes;
