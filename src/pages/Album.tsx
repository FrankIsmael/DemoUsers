import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { ListOfUsers } from '../components/ListOfUsers';

export const Album = (props: RouteComponentProps) => {
  console.log(props);
  return <div><ListOfUsers /></div>;
};
