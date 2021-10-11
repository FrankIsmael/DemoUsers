import React, { useState, useEffect } from 'react';

interface UserProps {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const useUsersData = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        // Fetch data from REST API
        const response = await fetch('https://reqres.in/api/users/');

        if (response.status === 200) {
          // Extract json
          const rawData = await response.json();
          setUsers(rawData.data);
          setLoading(false);
        } else {
          console.error(`Error ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error ${error}`);
      }
    })();
  }, []);

  return { users, loading };
};
