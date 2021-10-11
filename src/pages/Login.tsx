import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { UserForm } from '../components/UserForm/Login';

export default (props: RouteComponentProps) => {
  const onSubmit = (email: string, password: string) => {
    const input = { email, password };
  };

  return (
      <UserForm disabled={false} error={'some'} title="Sign In" onSubmit={onSubmit} />
  );
};
