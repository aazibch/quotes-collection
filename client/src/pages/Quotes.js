import { useContext } from 'react';

import QuotesContext from '../store/quotes-context';
import QuotesGrid from '../components/Quotes/QuotesGrid/QuotesGrid';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';

function QuotesPage() {
    const quotesCtx = useContext(QuotesContext);

    if (quotesCtx.isLoading) return <LoadingSpinner />;

    return <QuotesGrid quotes={quotesCtx.quotes} />;
}

export default QuotesPage;
