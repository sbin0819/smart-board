import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { GlobalStyles } from './styles';
import Home from './pages/home';
import Sub from './pages/sub';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Route exact path="/" component={Home} />
      <Route exact path="/sub" component={Sub} />
    </Fragment>
  );
}

export default App;
