import { useContext } from 'react';

import type { CardData } from '../../../types/types.ts';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

type CardProps = {
    card: CardData;
    onImageClick: (card: CardData) => void;
    handleCardLike: (card: CardData) => void;
    handleCardDelete: (card: CardData) => void;
};

export default function Card(props: CardProps): React.JSX.Element {
    const { currentUser } = useContext(CurrentUserContext);
    const { name, link, isLiked, owner } = props.card;
    const isOwn = owner === currentUser?._id;
    const { onImageClick, handleCardLike, handleCardDelete } = props;

    return (
        <li className="card">
            <img
                className="card__image"
                onClick={() => onImageClick(props.card)}
                src={link}
                alt={name}
            />
            {isOwn && (
                <button
                    aria-label="Eliminar tarjeta"
                    className="card__delete-button"
                    onClick={() => handleCardDelete(props.card)}
                    type="button"
                ></button>
            )}
            <div className="card__description">
                <h2 className="card__title">{name}</h2>
                <button
                    aria-label="Botón Me gusta"
                    className={`card__like-button ${isLiked ? 'card__like-button_is-active' : ''}`}
                    onClick={() => handleCardLike(props.card)}
                    type="button"
                ></button>
            </div>
        </li>
    );
}