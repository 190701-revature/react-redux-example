import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClickerComponent from './components/clicker.component';
import NavComponent from './components/nav.component';
// If you exported the connected component as a default export
// ensure you importing that component with a default import (no {})
import PokeComponent from './components/poke.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavComponent />
        <Switch>
          <Route path="/clicker" component={ClickerComponent} />
          <Route path="/poke" component={PokeComponent} />
          <Route component={ClickerComponent} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
