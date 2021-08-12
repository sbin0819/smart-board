import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { GlobalStyles } from './styles';
import Home from './pages/Home';
import Board from './pages/Board';
import Sub from './pages/sub';
import B from './pages/board2';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Route exact path="/" component={Home} />
      <Route exact path="/board/:title" component={Board} />
      <Route exact path="/sub" component={Sub} />
      <Route exact path="/b" component={B} />
    </Fragment>
  );
}

export default App;
