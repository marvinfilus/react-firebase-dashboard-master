import React from 'react';
import { logout } from './firebase/auth';
import { useHistory } from 'react-router-dom';
import { useSession } from './firebase/UserProvider';
import Nav from './pages/Nav';

function Header() {
  const history = useHistory();
  const {user} = useSession();

  const logoutUser = async () => {
    await logout();
    history.push('/login');
  }

    
  return (
    <header>
      <h2>The Grid</h2>
      { user ? <Nav/> : null } 
      {!! user &&
       <button className="ui secondary button logout" onClick={logoutUser} >
        LOGOUT
      </button>}
    </header>
  );
}

export default Header;
