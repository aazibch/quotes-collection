import Card from '../../UI/Card/Card';

import classes from './NewQuoteForm.module.css';

function NewQuoteForm() {
    return (
        <form className={classes.form}>
            <Card className={classes.formContent}>
                <label htmlFor='quote'>Quote</label>
                <textarea
                    id='quote'
                    placeholder='Time is an illusion. Lunchtime doubly so.'
                ></textarea>
                <label htmlFor='author'>Author</label>
                <input id='author' type='text' placeholder='Douglas Adams' />
                <button className='button buttonLarge'>Submit</button>
            </Card>
        </form>
    );
}

export default NewQuoteForm;
