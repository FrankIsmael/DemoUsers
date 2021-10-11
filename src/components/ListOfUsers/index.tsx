import React from 'react';

import { UserCard } from '../UserCard';

import { useUsersData } from '../../hooks/useUsersData';
import { List } from './styles';

export const ListOfUsers = () => {
  const { users, loading } = useUsersData();

  return (
    <>
      {loading && <p>Loading...</p>}
      <List>
        {users.map((user) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </List>
    </>
  );
};
