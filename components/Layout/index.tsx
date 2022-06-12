import React from 'react';
import { HeaderMenu } from '../HeadMenu';

interface PageProps {
  children: React.ReactNode
}

const Layout = ({ children }: PageProps) => (
    <>
      <HeaderMenu />
      {children}
    </>
  );

  export default Layout;
