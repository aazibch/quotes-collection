import Masonry from '@mui/lab/Masonry';
import Quote from '../Quote/Quote';

function QuotesGrid() {
    return (
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
            <Quote
                content='Look deep into nature, and then you will understand everything better. Look deep into nature, and then you will understand everything better. Look deep into nature, and then you will understand everything better. Look deep into nature, and then you will understand everything better. Look deep into nature, and then you will understand everything better.'
                author='Albert Einstein'
            />
            <Quote
                content='Look deep into nature, and then you will understand everything better.'
                author='Albert Einstein'
            />
            <Quote
                content='Look deep into nature, and then you will understand everything better.'
                author='Albert Einstein'
            />
            <Quote
                content='Look deep into nature, and then you will understand everything better.'
                author='Albert Einstein'
            />
        </Masonry>
    );
}

export default QuotesGrid;
