import { useContext } from 'react';
import type { PopupConfig, CardData, MainProps } from '../../types/types.ts';

import NewCard from './Popup/NewCard/NewCard';
import EditProfile from './Popup/EditProfile/EditProfile';
import EditAvatar from './Popup/EditAvatar/EditAvatar';
import Popup from './Popup/Popup';
import Card from './Card/Card';
import ImagePopup from './Popup/ImagePopup/ImagePopup';
import CurrentUserContext from '../../contexts/CurrentUserContext.tsx';




export default function Main(props:MainProps): React.JSX.Element {
    
    const { currentUser } = useContext (CurrentUserContext)
    const {cards, popup, handleOpenPopup, handleClosePopup, handleCardLike, handleCardDelete} = props;

    const newCardPopup: PopupConfig = {
        title: 'Nuevo lugar',
        children: <NewCard />
    };

    const editProfilePopup: PopupConfig = {
        title: 'Editar Perfil',
        children: <EditProfile />
    };

    const editAvatarPopup: PopupConfig = {
        title: 'Cambiar foto de perfil',
        children: <EditAvatar />
    }


    function handleImageClick(card: CardData): void {
        handleOpenPopup({
            children: <ImagePopup card={card} />,
        });
    }

    return (
        <main className="content">
            <section className="profile page__section">
                <div className="profile__avatar-container">
                    <img
                        className="profile__image"
                        src={currentUser?.avatar}
                        alt={currentUser?.name}
                    />
                    <button
                        onClick={() => handleOpenPopup(editAvatarPopup)}
                        className="profile__avatar-edit-button"
                        type="button"
                        aria-label="Editar foto de perfil"
                    ></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser?.name}</h1>
                    <button
                        onClick={() => handleOpenPopup(editProfilePopup)}
                        aria-label="Editar perfil"
                        className="profile__edit-button"
                        type="button">
                    </button>
                    <p className="profile__description">{currentUser?.about}</p>
                </div>
                <button
                    onClick={() => handleOpenPopup(newCardPopup)}
                    aria-label="Agregar tarjeta"
                    className="profile__add-button"
                    type="button"
                ></button>
            </section>
            <section className="cards page__section">
                <ul className="cards__list">
                    {cards.map((card) => (
                        <Card key={card._id} card={card} onImageClick={handleImageClick} 
                        handleCardLike={handleCardLike} handleCardDelete={handleCardDelete}
                        />
                    ))}
                </ul>
            </section>
            {popup && (
                <Popup
                    onClose={handleClosePopup}
                    title={popup.title}
                    isOpen={popup !== null}
                >
                    {popup.children}
                </Popup>
            )}
        </main>
    );
}