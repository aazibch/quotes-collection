import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from '../../UI/Card/Card';

import classes from './Quote.module.css';

function Quote(props) {
    return (
        <Card>
            <div className={classes.main}>
                <span className={classes.content}>“{props.content}”</span>
                <span className={classes.author}>— {props.author}</span>
            </div>
            <div className={classes.actions}>
                <button className='button'>
                    <FontAwesomeIcon icon={faHeart} /> Favorite
                </button>
            </div>
        </Card>
    );
}

export default Quote;
