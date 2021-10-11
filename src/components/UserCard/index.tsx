import React from 'react';
import { navigate, useLocation } from '@reach/router';

import { Article, Image, text } from './styles';

interface CardProps {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

export const UserCard = ({
  id,
  avatar,
  first_name,
  last_name,
  email
}: CardProps) => {
  const { pathname } = useLocation();
  const openCardEdition = (id: number) => alert('clicked');
  
  return (
    <Article>
      <Image
        src={avatar}
        alt="user_photo"
        onClick={() => {
          pathname?.includes('/album') ? navigate('/album/test'): openCardEdition(id);
        }}
      />
      <p className={text}>
        <strong>
          {first_name} {last_name}
        </strong>
      </p>
      <p>{email}</p>
    </Article>
  );
};
