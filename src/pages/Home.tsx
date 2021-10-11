import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { ListOfUsers } from '../components/ListOfUsers';
import { Layout } from '../components/Layout';

export default (props: RouteComponentProps) => {
  return (
    <main>
      <Layout title="List of users">
        <ListOfUsers />
      </Layout>
    </main>
  );
};
