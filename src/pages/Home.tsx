import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { ListOfUsers } from '../components/ListOfUsers';

export default (props: RouteComponentProps) => {
  return (
    <main>
      <ListOfUsers />
    </main>
  );
};
