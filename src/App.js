import { Link, Route } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
function App() {
  return (
    <div className='App'>
      <header>
        <p>
          <Link to={'/todos'}>Todos</Link>
        </p>
        <p>
          <Link to='/albums'>Albums</Link>
        </p>
      </header>
      <div className='main-body'>
        <Route path='/todos' component={TodoFeature} />
        <Route path='/albums' component={AlbumFeature} />
      </div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
