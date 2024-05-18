import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Root from './components/Root';
import AppBar from './components/widgets/AppBar';
import AppDrawer from './components/widgets/AppDrawer';
import RouterFrame from './components/RouterFrame';
import Page from './components/widgets/Page';

const defaultTheme = createTheme();

const App = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={defaultTheme}>
      <Root>
        <AppBar />
        <AppDrawer />
        <RouterFrame>
          <Page>
            <h2>App Content</h2>
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </Page>
        </RouterFrame>
      </Root>
    </ThemeProvider>
  </>
);

export default App;
