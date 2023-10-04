import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
   <nav className='header'>
    <ul className='box'>
      <li>
        <Link className='list' to="counter">
          Counter
        </Link>
      </li>
      <li>
        <Link className='list' to="contact">Contact</Link>
      </li>
      <li>
        <Link className='list' to="about">About</Link>
      </li>
      <li>
        <Link className='list' to="service">Service</Link>
      </li>
    <h3>hello</h3>
    </ul>
   </nav>
    </div>
  );
}

export default App;
