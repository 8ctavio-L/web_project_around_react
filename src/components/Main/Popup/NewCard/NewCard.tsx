import { useState, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";
export default function NewCard(): React.JSX.Element {

const {handleAddPlaceSubmit} = useContext(CurrentUserContext);

const [name, setName] = useState('');
const [link, setLink] = useState ('');

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  handleAddPlaceSubmit({ name, link });
};

    
    return (
        <form onSubmit={handleSubmit} className="popup__form" id="new-card-form">
            <input
                value = {name}
                onChange={(e) => setName(e.target.value)}
                className="popup__input popup__input_type_card-name"
                name="place-name"
                placeholder="Título"
                required
                type="text"
                minLength={2}
                maxLength={30}
            />
            <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="popup__input popup__input_type_url"
                name="link"
                placeholder="Enlace a la imagen"
                required
                type="url"
            />
            <button className="button popup__button" type="submit" >Crear</button>
        </form>
    );
}