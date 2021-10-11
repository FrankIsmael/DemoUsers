import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { ListOfUsers } from '../components/ListOfUsers';

export const Album = (props: RouteComponentProps) => {
  return <div><ListOfUsers /></div>;
};
