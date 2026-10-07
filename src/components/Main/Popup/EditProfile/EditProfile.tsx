export default function EditProfile(): React.JSX.Element {
    return (
        <form className="popup__form" id="edit-profile-form">
            <input
                className="popup__input popup__input_type_name"
                name="name"
                placeholder="Nombre"
                type="text"
                required
                minLength={2}
                maxLength={40}
            />
            <span className="popup__error" id="name-error"></span>

            <input
                className="popup__input popup__input_type_description"
                name="description"
                placeholder="Acerca de mí"
                required
                minLength={2}
                maxLength={200}
                type="text"
            />
            <span className="popup__error" id="description-error"></span>
            <button className="button popup__button" type="submit" >Guardar</button>
        </form>
    );
}