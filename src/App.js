import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss'
import Dashboard_UI_1 from './pages/Dashboard/index'
import Dashboard_UI_2 from './pages/Dashboard-UI-2/index';
import Dashboard_UI_3 from './pages/Dashboard-UI-3/index';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/dashboard-UI-1" component={Dashboard_UI_1} />
          <Route exact path="/dashboard-UI-2" component={Dashboard_UI_2} />
          <Route exact path="/dashboard-UI-3" component={Dashboard_UI_3} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
