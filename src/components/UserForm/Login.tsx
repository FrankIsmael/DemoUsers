import React, { useState } from 'react';
import { useInputValue } from '../../hooks/useInputValue';

import { Form, Input, Title, Error } from './styles';

import { SubmitButton } from '../SubmitButton';

interface UserFormProps {
  onSubmit: (email: string, password: string) => void;
  title: string;
  error?: string;
  disabled: boolean;
}

export const UserForm = ({
  onSubmit,
  title,
  error,
  disabled,
}: UserFormProps) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email.value, password.value);
  };

  return (
    <div style={{ height: '100%', display: 'flex' }}>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder="Email"
          name="email"
          type="email"
          {...email}
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          name="password"
          type="password"
          {...password}
        />
        <SubmitButton disabled={false}>{title}</SubmitButton>
        {error && <Error>{error}</Error>}
      <span style={{color: 'lightgray'}}>Test: eve.holt@reqres.in, cityslicka</span>
      </Form>
    </div>
  );
};
