import {Link} from 'react-router-dom';
import classes from './FirstNavigation.module.css';

function FirstNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Daily Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All meetup</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetup</Link>
          </li>
          <li>
            <Link to='/favorites'>My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default FirstNavigation;