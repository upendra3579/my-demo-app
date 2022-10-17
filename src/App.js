
import './App.css';
import {BrowserRouter,Link} from 'react-router-dom';
import Main from './components/main/main';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <li className="nav-link">
    <Link to="/users">users</Link>
    </li>
    <li className="nav-link">
      <Link to="/posts">posts</Link>
    </li>
    <li className="nav-link">
      <Link to="/postdetails">postdetails</Link>
    </li>
    <Main />
    </BrowserRouter>

    </div>
  );
}

export default App;
