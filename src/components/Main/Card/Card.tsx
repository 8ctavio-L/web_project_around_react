import type { CardData } from '../../../types/types.ts';

type CardProps = {
    card: CardData;
    onImageClick: (card: CardData) => void;
};



export default function Card(props: CardProps): React.JSX.Element {
    const { name, link } = props.card;
    const { onImageClick } = props;
    return (
        <li className="card">
            <img className="card__image" onClick={() => onImageClick(props.card)} src={link} alt={name} />
            <button
                aria-label="Eliminar tarjeta"
                className="card__delete-button"
                type="button"
            ></button>
            <div className="card__description">
                <h2 className="card__title">{name}</h2>
                <button
                    aria-label="Botón Me gusta"
                    className="card__like-button"
                    type="button"
                ></button>
            </div>
        </li>
    );
}