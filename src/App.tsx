import CurrentUserContext from './contexts/CurrentUserContext'

import { useState, useEffect } from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import api from './utils/api';
import type { UserData, CardData, PopupConfig, UserFormData, AvatarFormData, CardFormData } from './types/types';

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

async function handleCardLike(card: CardData) {
  try {
    const newCard = card.isLiked
      ? await api.unlikeCard(card._id)
      : await api.likeCard(card._id);

    setCards((state) =>
      state.map((c) => (c._id === card._id ? newCard : c))
    );
  } catch (error) {
    console.error(error);
  }
}

async function handleCardDelete(card: CardData) {
  try {
    await api.deleteCard(card._id);

    setCards((state) => state.filter((c) => c._id !== card._id));
  } catch (error) {
    console.error(error);
  }
}

async function handleUpdateUser(data: UserFormData) {
  try {
    const newData = await api.editProfile(data);
    setCurrentUser(newData);
    handleClosePopup();
  } catch (error) {
    console.error(error);
  }
}

async function handleUpdateAvatar(data: AvatarFormData) {
  try {
    const newData = await api.updateAvatar(data.avatar);
    setCurrentUser(newData);
    handleClosePopup();
  } catch (error) {
    console.error(error);
  }
}

async function handleAddPlaceSubmit(data:CardFormData) {
  try {
    const newCard = await api.addCard(data);
    setCards((state) => [newCard, ...state]);
    handleClosePopup();
  } catch (error) {
    console.error(error);
  }
}


function handleOpenPopup (popup:PopupConfig){
  setPopup(popup);
}

function handleClosePopup (){
  setPopup(null)
}



  return (
    <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit,
      }}>
    <div className="page__content">
      <Header />
      <Main
        cards={cards}
        popup={popup}
        handleOpenPopup={handleOpenPopup}
        handleClosePopup={handleClosePopup} 
        handleCardLike={handleCardLike}
        handleCardDelete={handleCardDelete}
        />
      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App