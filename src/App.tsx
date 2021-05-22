import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import './App.css';
import EventPage from './components/EventPage';
import TodosPage from './components/TodosPage';
import UserPageItem from './components/UserPageItem';
import UsersPage from './components/UsersPage';

const App = () => {

  return (
    <div >
      <BrowserRouter>
        <div className='navs'>
          <div><NavLink to={'/events'}>Страница Events</NavLink></div>
          <div><NavLink to={'/todos'}>Страница дел</NavLink></div>
          <div><NavLink to={'/users'}>Страница пользователей</NavLink></div>
        </div>
        <div className="app">
          <Route path={'/users'} exact>
            <UsersPage />
          </Route>
          <Route path={'/users/:id'}>
            <UserPageItem />
          </Route>
          <Route path={'/todos'} exact>
            <TodosPage />
          </Route>
          <Route path={'/events'} exact>
            <EventPage />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
