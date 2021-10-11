import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { ListOfUsers } from '../components/ListOfUsers';
import { Layout } from '../components/Layout';

export const Album = (props: RouteComponentProps) => {
  return (
    <div>
      <Layout title="Albums de usuarios">
        <ListOfUsers />
      </Layout>
    </div>
  );
};
