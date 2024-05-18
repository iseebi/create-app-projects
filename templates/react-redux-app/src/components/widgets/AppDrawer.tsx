import { Drawer as MuiDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { drawerWidth } from './widgetConfigs';

type Props = {
  onOpen: (path: string) => void;
};

const Drawer = styled(MuiDrawer)`
  overflow: hidden;
`;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DrawerContentFrame = styled('div')`
  overflow: scroll;
`;

const MenuItem: React.FC<{
  open?: boolean;
  title: string;
  icon: React.ReactNode;
  path: string;
  onClick: () => void;
}> = ({ open, title, icon, path, onClick }) => (
  <ListItem disablePadding>
    <ListItemButton
      href={path}
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItemButton>
  </ListItem>
);

const AppDrawer: React.FC<Props> = ({ onOpen }) => {
  const open = true;
  return (
    <Drawer variant="permanent" open={open} PaperProps={{ sx: { width: drawerWidth } }}>
      <DrawerHeader />
      <DrawerContentFrame>
        <List>
          <MenuItem open={open} icon={<HomeIcon />} path="/" title="Home" onClick={() => onOpen('/')} />
        </List>
      </DrawerContentFrame>
    </Drawer>
  );
};

export default AppDrawer;
