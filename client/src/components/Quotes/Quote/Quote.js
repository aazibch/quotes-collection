import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from '../../UI/Card/Card';
import FavoritesContext from '../../../store/favorites-context';

import classes from './Quote.module.css';

function Quote(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const isFavorite = favoritesCtx.isFavorite(props.id);

    function favoriteButtonHandler() {
        if (isFavorite) {
            favoritesCtx.removeFromFavoriteQuotes(props.id);
        } else {
            favoritesCtx.addToFavoriteQuotes(props.id);
        }
    }

    const favoriteButtonClasses = ['button', classes.favoriteButton];
    let favoriteButtonText = 'Favorite';

    if (isFavorite) {
        favoriteButtonClasses.push(classes.favoriteButtonSelected);
        favoriteButtonText = 'Unfavorite';
    }

    return (
        <Card>
            <div className={classes.main}>
                <span className={classes.content}>“{props.content}”</span>
                <span className={classes.author}>— {props.author}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={favoriteButtonClasses.join(' ')}
                    onClick={favoriteButtonHandler}
                >
                    <FontAwesomeIcon icon={faHeart} />
                    {favoriteButtonText}
                </button>
            </div>
        </Card>
    );
}

export default Quote;
