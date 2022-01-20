import React from 'react';
import { Box } from '@chakra-ui/react';
import { Header } from '../Header';

export const Layout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box>
      <Header title={title}/>
      <Box m="0 20px">
        {children}
      </Box>
    </Box>
  )
}
