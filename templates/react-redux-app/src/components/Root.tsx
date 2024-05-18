import React from 'react';
import { styled } from '@mui/material';

type Props = {
  children?: React.ReactNode;
};

const RootOuterFrame = styled('div')`
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const RootInnerFrame = styled('div')`
  height: 100dvh;
`;

const Root: React.FC<Props> = ({ children }) => (
  <RootOuterFrame>
    <RootInnerFrame>{children}</RootInnerFrame>
  </RootOuterFrame>
);

export default Root;
