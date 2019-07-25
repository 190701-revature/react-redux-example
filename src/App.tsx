import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClickerComponent from './components/clicker.component';
import NavComponent from './components/nav.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComponent />
        <Switch>
          <Route component={ClickerComponent} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
