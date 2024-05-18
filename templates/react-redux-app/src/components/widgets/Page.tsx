import React from 'react';
import { styled } from '@mui/material';

type Props = {
  children?: React.ReactNode;
};

const Frame = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Page: React.FC<Props> = ({ children }) => <Frame>{children}</Frame>;

export default Page;
