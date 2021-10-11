import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { UserCard } from '../UserCard';

import { useUsersData } from '../../hooks/useUsersData';
import { List } from './styles';

export const ListOfUsers = (props: RouteComponentProps) => {
  const { users, loading } = useUsersData();
  console.log(props);
  return (
    <>
      {loading && <p>Loading...</p>}
      <List>
        {users.map((user) => {
          return <UserCard key={user.id} onClickCard={() => {}} {...user} />;
        })}
      </List>
    </>
  );
};
