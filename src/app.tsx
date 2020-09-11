interface matchedRoutes {
  matchedRoutes: any[]
}
export function onRouteChange({ matchedRoutes }: matchedRoutes) {
  if (matchedRoutes.length) {
    console.log('matchedRoutes', matchedRoutes);
    document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }
}