import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { GlobalStyles } from './styles';
import Header from './layouts/Header';
import Board from './pages/Board';
import Sub from './pages/sub';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Route exact path="/" component={Board} />
      <Route exact path="/sub" component={Sub} />
    </Fragment>
  );
}

export default App;
