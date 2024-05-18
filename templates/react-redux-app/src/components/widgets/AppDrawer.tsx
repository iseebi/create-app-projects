import { Drawer as MuiDrawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { drawerWidth } from './widgetConfigs';

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

const AppDrawer = () => {
  const open = true;
  return (
    <Drawer variant="permanent" open={open} PaperProps={{ sx: { width: drawerWidth } }}>
      <DrawerHeader />
      <DrawerContentFrame>
        <List>
          {[0, 1, 2, 3, 4, 5, 6].map((loopIndex) =>
            ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={`${text}_${loopIndex}`} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )),
          )}
        </List>
      </DrawerContentFrame>
    </Drawer>
  );
};

export default AppDrawer;
