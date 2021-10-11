import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { useAppDispatch } from '../app/hooks';
import { loginAsync } from '../features/auth/authSlice';

import { UserForm } from '../components/UserForm/Login';

export default (props: RouteComponentProps) => {
  const dispatch = useAppDispatch();

  const onSubmit = (email: string, password: string) => {
    const input = { email, password };
    dispatch(loginAsync(input));
  };

  return (
    <UserForm
      disabled={false}
      error={'some'}
      title="Sign In"
      onSubmit={onSubmit}
    />
  );
};
