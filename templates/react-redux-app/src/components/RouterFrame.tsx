import { styled } from '@mui/material';
import React from 'react';
import { drawerWidth } from './widgets/widgetConfigs';

type Props = {
  children?: React.ReactNode;
};

const Frame = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: ${drawerWidth}px;
  overflow: hidden;
`;

const Spacer = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const ContentFrame = styled('main')`
  flex-grow: 1;
  overflow: scroll;
`;

const RouterFrame: React.FC<Props> = ({ children }) => (
  <Frame>
    <Spacer />
    <ContentFrame>{children}</ContentFrame>
  </Frame>
);

export default RouterFrame;
