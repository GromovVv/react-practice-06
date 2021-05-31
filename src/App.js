import { Switch, Route, Link } from 'react-router-dom';

import Counter from './Components/Counter';
import TodosView from './Views/TodosView';

import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/counter">Счётчик</Link>
        </li>
        <li>
          <Link to="/todos">Заметки</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/todos">
          <TodosView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
