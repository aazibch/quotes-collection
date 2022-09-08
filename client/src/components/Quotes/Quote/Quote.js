import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import Card from '../../UI/Card/Card';
import QuotesContext from '../../../store/quotes-context';

import classes from './Quote.module.css';

function Quote(props) {
    const quotesCtx = useContext(QuotesContext);
    const isFavorite = quotesCtx.isFavorite(props.id);

    function favoriteButtonHandler() {
        if (isFavorite) {
            quotesCtx.unfavoriteQuote(props.id);
        } else {
            quotesCtx.favoriteQuote(props.id);
        }
    }

    const favoriteButtonClasses = ['button', classes.favoriteButton];
    let favoriteButtonText = 'Favorite';

    if (isFavorite) {
        favoriteButtonClasses.push(classes.favoriteButton_selected);
        favoriteButtonText = 'Unfavorite';
    }

    return (
        <Card>
            <div className={classes.header}>
                <button
                    onClick={() => quotesCtx.deleteQuote(props.id)}
                    className={classes.deleteButton}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
            <div className={classes.main}>
                <span className={classes.content}>“{props.content}”</span>
                <span className={classes.author}>— {props.author}</span>
            </div>
            <div className={classes.footer}>
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
