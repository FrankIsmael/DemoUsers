import React from 'react';
import { MdHome, MdPhotoAlbum, MdLogout } from 'react-icons/md';

// redux
import { useAppDispatch } from '../../app/hooks';
import { removeAuth } from '../../features/auth/authSlice';

import { LiButton, Link, Nav, Text } from './styles';

const SIZE = '20px';
export const Sidebar = () => {
  const dispatch = useAppDispatch(); 
  const isSmall = window.innerWidth <= 768;

  return (
    <Nav fixed={isSmall}>
      <Link to="/">
        <MdHome size={SIZE} />
        <Text>Home</Text>
      </Link>
      <Link to="/album">
        <MdPhotoAlbum size={SIZE} />
        <Text>Album</Text>
      </Link>
      <LiButton
        onClick={() => {
          dispatch(removeAuth());
        }}
      >
        <MdLogout size={SIZE} />
        <Text>Salir</Text>
      </LiButton>
    </Nav>
  );
};
