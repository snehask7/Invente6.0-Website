import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export function useNav() {
  return useContext(NavbarContext);
}

export function NavProvider({ children }) {
  const [navbarToggle, setnavbarToggle] = useState(false);

  function toggleNavbar() {
    setnavbarToggle(!navbarToggle);
  }

  function resetNavbar() {
    setnavbarToggle(false);
  }

  return (
    <NavbarContext.Provider value={{ navbarToggle, toggleNavbar, resetNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
