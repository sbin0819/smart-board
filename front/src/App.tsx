import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { GlobalStyles } from './styles';
import Header from './layouts/Header';
import Board from './pages/Board';
import Sub from './pages/sub';
import Drag from './pages/drag';
import Drag2 from './pages/dragEx';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Route exact path="/" component={Board} />
      <Route exact path="/sub" component={Sub} />
      <Route exact path="/drag" component={Drag} />
      <Route exact path="/drag2" component={Drag2} />
    </Fragment>
  );
}

export default App;
