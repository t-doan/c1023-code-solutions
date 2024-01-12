/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBolt, FaSignOutAlt } from 'react-icons/fa';
import { AppContext } from './AppContext';

export function NavBar() {
  const authContext = useContext(AppContext);
  /* TODO: Grab `user` and `handleSignOut` from `AppContext` */
  const user = authContext.user;
  const handleSignOut = authContext.handleSignOut;

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <FaBolt className="mr-2" />
            Awesome App
          </Link>
          <div>
            {user && (
              <button className="btn btn-dark" onClick={handleSignOut}>
                Sign out
                <FaSignOutAlt className="ml-2" />
              </button>
            )}
            {!user && (
              <>
                <Link to="/sign-in" className="btn btn-primary">
                  Sign In
                </Link>
                <Link to="/sign-up" className="btn btn-dark">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
