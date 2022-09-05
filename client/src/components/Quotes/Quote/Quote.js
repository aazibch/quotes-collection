import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import classes from './Quote.module.css';

function Quote(props) {
    return (
        <div className={classes.quote}>
            <div className={classes.main}>
                <p>{props.content}</p>
                <p>{props.author}</p>
            </div>
            <div className={classes.actions}>
                <button className='button'>
                    <FontAwesomeIcon icon={faHeart} /> Favorite
                </button>
            </div>
        </div>
    );
}

export default Quote;
