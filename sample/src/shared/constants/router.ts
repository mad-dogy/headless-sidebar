const getRouteHome = () => '/';
const getRouteProfile = () => '/profile';
const getRouteBookmark = () => '/bookmark';
const getRouteSettings = () => '/settings';
const getRouteNotFound = () => '*';

export const routes = {
  home: getRouteHome,
  profile: getRouteProfile,
  bookmark: getRouteBookmark,
  settings: getRouteSettings,
  notFound: getRouteNotFound
};

export type RouteName = keyof typeof routes;
