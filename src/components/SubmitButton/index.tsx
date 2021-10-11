import React from 'react';

import { Button } from './styles';

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export const SubmitButton = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <Button disabled={disabled} onClick={onClick} type="submit">
      {children}
    </Button>
  );
};
