import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import Card from '../../UI/Card/Card';
import CardHeader from '../../UI/Card/CardHeader/CardHeader';
import CardContent from '../../UI/Card/CardContent/CardContent';
import CardFooter from '../../UI/Card/CardFooter/CardFooter';
import Button from '../../UI/Button/Button';
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

    const favoriteButtonClasses = [classes.favoriteButton];
    let favoriteButtonText = 'Favorite';

    if (isFavorite) {
        favoriteButtonClasses.push(classes.favoriteButton_selected);
        favoriteButtonText = 'Unfavorite';
    }

    return (
        <Card>
            <CardHeader className={classes.header}>
                <Button
                    onClick={() => quotesCtx.deleteQuote(props.id)}
                    className={classes.deleteButton}
                    kind="plain"
                >
                    <FontAwesomeIcon icon={faXmark} />
                </Button>
            </CardHeader>
            <CardContent>
                <span className={classes.content}>“{props.content}”</span>
                <span className={classes.author}>— {props.author}</span>
            </CardContent>
            <CardFooter>
                <Button
                    className={favoriteButtonClasses.join(' ')}
                    onClick={favoriteButtonHandler}
                >
                    <FontAwesomeIcon icon={faHeart} />
                    {favoriteButtonText}
                </Button>
            </CardFooter>
        </Card>
    );
}

export default Quote;
