import { useRef, useContext } from 'react'
import CurrentUserContext from '../../../../contexts/CurrentUserContext';

export default function EditAvatar(): React.JSX.Element {

const { handleUpdateAvatar }= useContext(CurrentUserContext)
const avatarRef = useRef<HTMLInputElement>(null);

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  if (avatarRef.current) {
    handleUpdateAvatar({ avatar: avatarRef.current.value });
  }
};


    return (
        <form 
        onSubmit={handleSubmit}
        className="popup__form" id="edit-avatar-form">
            <input
                ref={avatarRef}
                className="popup__input"
                name="avatar"
                placeholder="Enlace a la imagen"
                type="url"
                required
            />
            <span className="popup__error" id="avatar-error"></span>
            <button className="button popup__button" type="submit" >Guardar</button>
        </form>
    );
}