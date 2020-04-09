// Gets the current screen from navigation state
export const getActiveRoute = state => {
  if (state && typeof state.index !== 'undefined') {
    const route = state.routes[state.index];

    if (route.state) {
      // Dive into nested navigators
      return getActiveRoute(route.state);
    }

    return route;
  }
};
