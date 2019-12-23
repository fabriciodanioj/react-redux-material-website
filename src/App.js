import React from 'react';
import { Provider } from 'react-redux';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import SubHeader from './components/subHeader';
import Routes from './routes';
import store from './store';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#9c27b0',
        dark: '#373737',
      },
      secondary: {
        main: '#3f51b5',
        dark: '#000051',
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className='App' style={{ backgroundColor: '#ce93d8' }}>
          <Header />
          <SubHeader />
          <Routes />
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
