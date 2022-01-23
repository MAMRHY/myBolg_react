import './App.scss';
import Head from './components/head';

import {HashRouter as Router, Route, Switch,Redirect} from 'react-router-dom'
import {routes} from './routes/routes'

function App() {
  return (
    <div className="App">
        <Head></Head>
        <div className="container">
          <Router>
            <Switch>
              {routes.map( route =>{
                return <Route exact key={route.path} {...route}  />
              })}
              <Redirect to='/404' />
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
