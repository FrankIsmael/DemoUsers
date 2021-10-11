import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { loginAsync, selectAuth } from '../features/auth/authSlice';

import { UserForm } from '../components/UserForm/Login';

export default (props: RouteComponentProps) => {
  const { error } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  const onSubmit = (email: string, password: string) => {
    const input = { email, password };
    dispatch(loginAsync(input));
  };

  return (
    <UserForm
      disabled={false}
      error={error}
      title="Sign In"
      onSubmit={onSubmit}
    />
  );
};
