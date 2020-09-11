// import React from 'react';
import BasicLayout from './basic';
import PlatformLayout from './platform';


const Layout: any = (props: any) => {
  const { children, loading, location: { pathname = '/' }, route: { routes }, } = props;
  if (
    pathname === '/login' ||
    pathname === '/register' ||
    /^\/initialize/.test(pathname) ||
    /^\/exception/.test(pathname)
  ) {
    return (<BasicLayout>{children}</BasicLayout>);
  }
  return (<PlatformLayout {...props}>{children}</PlatformLayout>);
};

export default Layout;