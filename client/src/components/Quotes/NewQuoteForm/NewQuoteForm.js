import { useRef } from 'react';
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

import classes from './NewQuoteForm.module.css';

function NewQuoteForm(props) {
    const quoteInputRef = useRef();
    const authorInputRef = useRef();

    function submitHandler(e) {
        e.preventDefault();

        props.submitQuoteHandler({
            content: quoteInputRef.current.value,
            author: authorInputRef.current.value
        });
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Card className={classes.formCard}>
                <label htmlFor="quote">Quote</label>
                <textarea
                    id="quote"
                    placeholder="Time is an illusion. Lunchtime doubly so."
                    ref={quoteInputRef}
                ></textarea>
                <label htmlFor="author">Author</label>
                <input
                    id="author"
                    type="text"
                    placeholder="Douglas Adams"
                    ref={authorInputRef}
                />
                <p className={classes.inputMessage}>
                    Say "Anonymous" if the author is unknown.
                </p>
                <Button size="large">Submit</Button>
            </Card>
        </form>
    );
}

export default NewQuoteForm;
