import React from 'react';
import { MdHome, MdPhotoAlbum, MdLogout } from 'react-icons/md'

import { Link, Nav, Text } from './styles';

const SIZE = '20px'
export const Sidebar = () => {
  const isSmall = window.innerWidth <= 768;
  return (
    <Nav fixed={isSmall}>
      <Link to="/"><MdHome size={SIZE} /><Text>Home</Text></Link>
      <Link to="/album"><MdPhotoAlbum size={SIZE} /><Text>Album</Text></Link>
      <Link to="/logout"><MdLogout size={SIZE} /><Text>Salir</Text></Link>
    </Nav>
  );
};
