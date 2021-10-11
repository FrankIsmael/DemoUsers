import React from 'react';
import { Helmet } from 'react-helmet';

interface LayoutProps{
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
} 

export const Layout = ({ children, title, subtitle }: LayoutProps) => {
  return (
    <>
      <Helmet>
        {title && <title>{`${title ? title : 'UsersApp'}`}</title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
        {children}
    </>
  );
};
