import './App.css';
import { Provider } from 'react-redux'
import Home from './components/home'
import { store } from './config/store'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
      <Router>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Provider>
      </Router>
  );
}

export default App;