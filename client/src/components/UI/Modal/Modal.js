import { useContext } from 'react';
import ReactDOM from 'react-dom';
import QuotesContext from '../../../store/quotes-context';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader/CardHeader';
import CardContent from '../Card/CardContent/CardContent';
import CardFooter from '../Card/CardFooter/CardFooter';
import Backdrop from './Backdrop/Backdrop';
import Button from '../Button/Button';

import classes from './Modal.module.css';

const Modal = (props) => {
    const quotesCtx = useContext(QuotesContext);

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={quotesCtx.dismissErrorMessage} />,
                document.querySelector('#backdrop-root')
            )}
            {ReactDOM.createPortal(
                <Card className={classes.modal}>
                    <CardHeader classname={classes.header}>
                        <h2 className={classes.heading}>{props.title}</h2>
                    </CardHeader>
                    <CardContent className={classes.content}>
                        <p>{props.content}</p>
                    </CardContent>
                    <CardFooter className={classes.footer}>
                        <Button
                            onClick={quotesCtx.dismissErrorMessage}
                            className={classes.closeButton}
                        >
                            Close
                        </Button>
                    </CardFooter>
                </Card>,
                document.querySelector('#overlay-root')
            )}
        </>
    );
};

export default Modal;
