import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import classes from './Quote.module.css';

function Quote(props) {
    return (
        <div className={classes.quote}>
            <div className={classes.main}>
                <span className={classes.content}>“{props.content}”</span>
                <span className={classes.author}>— {props.author}</span>
            </div>
            <div className={classes.actions}>
                <button className='button'>
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={classes.favoriteIcon}
                    />{' '}
                    Favorite
                </button>
            </div>
        </div>
    );
}

export default Quote;
