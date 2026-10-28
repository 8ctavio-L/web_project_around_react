import CurrentUserContext from './contexts/CurrentUserContext'

import { useState, useEffect } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import api from './utils/api';
import type { UserData, CardData, PopupConfig } from './types/types';

function App() {
  const [currentUser, setCurrentUser] = useState <UserData | null> (null);
  const [cards, setCards] = useState <CardData[]>([]);
  const [popup, setPopup] = useState <PopupConfig | null> (null);  



useEffect(() => {
  (async () => {
    try {
      const [userData, initialCards] = await Promise.all([
        api.getUserInfo(),
        api.getInitialCards()
      ]);
      setCurrentUser(userData);
      setCards(initialCards);
    } catch (error) {
      console.error(error);
    }
  })();
}, []);


  return (
    <CurrentUserContext.Provider value={{currentUser}}>
    <div className="page__content">
      <Header />
      <Main />
      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App