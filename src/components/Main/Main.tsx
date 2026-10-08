import { useState } from 'react';
import type { PopupConfig } from '../../types/types.ts';


import NewCard from './Popup/NewCard/NewCard';
import avatar from '../../images/avatar.jpg';
import EditProfile from './Popup/EditProfile/EditProfile';
import EditAvatar from './Popup/EditAvatar/EditAvatar';
import Popup from './Popup/Popup';


export default function Main(): React.JSX.Element {
    const [popup, setPopup] = useState<PopupConfig | null>(null);

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

    function handleOpenPopup(popupConfig: PopupConfig): void {
        setPopup(popupConfig)
    }

    function handleClosePopup(): void {
        setPopup(null);
    }

    return (
        <main className="content">
            <section className="profile page__section">
                <div className="profile__avatar-container">
                    <img
                        className="profile__image"
                        src={avatar}
                        alt="Avatar"
                    />
                    <button
                        onClick={() => handleOpenPopup(editAvatarPopup)}
                        className="profile__avatar-edit-button"
                        type="button"
                        aria-label="Editar foto de perfil"
                    ></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Jacques Cousteau</h1>
                    <button
                        onClick={() => handleOpenPopup(editProfilePopup)}
                        aria-label="Editar perfil"
                        className="profile__edit-button"
                        type="button">
                    </button>
                    <p className="profile__description">Explorador</p>
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