import { createTheme, ThemeProvider } from '@mui/material';
import React, { Suspense, useMemo, useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const Mindex = () => {
  const [userData, setUserData] = useState({
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : localStorage.setItem('theme', 'light'),
    isLoggedIn: localStorage.getItem('isLogged') ? localStorage.getItem('isLogged') : localStorage.setItem('isLogged', false),
  });

  const memoProvider = useMemo(() => ({userData, setUserData}), [userData, setUserData]);

  const MyTheme = createTheme({
    palette: {
      mode: userData.theme,
    },
  });

  return (
    <UserContext.Provider value={memoProvider}>
      <Suspense fallback='Loading...'>
        <ThemeProvider theme={MyTheme}>
          <AppRouter/>
        </ThemeProvider>
      </Suspense>
    </UserContext.Provider>
  )
}