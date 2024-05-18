import MuiAppBar from '@mui/material/AppBar';
import { IconButton, styled, Toolbar, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const StyledMuiAppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const Spacer = styled('div')`
  flex-grow: 1;
`;

const AppBar = () => (
  <StyledMuiAppBar>
    <Toolbar>
      <Typography component="h1" variant="h6" noWrap>
        App Name
      </Typography>
      <Spacer />
      <IconButton color="inherit">
        <AccountCircle />
      </IconButton>
    </Toolbar>
  </StyledMuiAppBar>
);

export default AppBar;
