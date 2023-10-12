import type { ReactNode } from 'react';
import styled from 'styled-components';

import Footer from '@components/footer';
import Header from '@components/header';
import { Menu } from '@components/menu';

const Layout = styled.div`
  background: #efeeee;
  min-height: 100vh;
`;

const Main = styled.main`
  padding-top: var(--ds-header-height);
  width: var(--ds-container-width);
  margin: 0 auto;
  min-height: 600px;
`;

export interface IDashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = (props: IDashboardLayoutProps) => {

  return (
    <Layout>
      <Menu/>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </Layout>
  );
};

export default DashboardLayout;
