import Masonry from '@mui/lab/Masonry';
import Quote from '../Quote/Quote';

import classes from './QuotesGrid.module.css';

function QuotesGrid(props) {
    return (
        <div className={classes.grid}>
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
                {props.quotes.map((quote) => (
                    <Quote
                        key={quote._id}
                        id={quote._id}
                        content={quote.content}
                        author={quote.author}
                    />
                ))}
            </Masonry>
        </div>
    );
}

export default QuotesGrid;
