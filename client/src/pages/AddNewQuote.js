import { useContext } from 'react';

import QuotesContext from '../store/quotes-context';
import NewQuoteForm from '../components/Quotes/NewQuoteForm/NewQuoteForm';

function AddNewQuotePage() {
    const quotesCtx = useContext(QuotesContext);

    return <NewQuoteForm submitQuoteHandler={quotesCtx.addNewQuote} />;
}

export default AddNewQuotePage;
