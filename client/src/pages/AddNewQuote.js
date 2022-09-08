import { useContext } from 'react';

import QuotesContext from '../store/quotes-context';
import NewQuoteForm from '../components/Quotes/NewQuoteForm/NewQuoteForm';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';

function AddNewQuotePage() {
    const quotesCtx = useContext(QuotesContext);

    if (quotesCtx.isLoading) return <LoadingSpinner />;

    return <NewQuoteForm submitQuoteHandler={quotesCtx.addNewQuote} />;
}

export default AddNewQuotePage;
