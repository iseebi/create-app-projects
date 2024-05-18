import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import RootContainer from './containers/RootContainer';
import store from './configureStore';

const defaultTheme = createTheme();

const App = () => (
  <BrowserRouter>
    <ReduxProvider store={store}>
      <CssBaseline />
      <ThemeProvider theme={defaultTheme}>
        <RootContainer />
      </ThemeProvider>
    </ReduxProvider>
  </BrowserRouter>
);

export default App;
