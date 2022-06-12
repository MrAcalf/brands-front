import React from 'react';
import { Grid, Container } from '@mantine/core';
import { HeaderMenu } from '../HeadMenu';

interface PageProps {
  children: React.ReactNode
}

const Layout = ({ children }: PageProps) => (
    <>
      <HeaderMenu />
      <Container my="md">
      <Grid>
        {children}
      </Grid>
      </Container>
      {/* {children} */}
    </>
  );

export default Layout;
