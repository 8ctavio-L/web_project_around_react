export default function EditAvatar(): React.JSX.Element {
    return (
        <form className="popup__form" id="edit-avatar-form">
            <input
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