import { useContext } from 'react';

import QuotesContext from '../store/quotes-context';
import QuotesGrid from '../components/Quotes/QuotesGrid/QuotesGrid';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';
import AppMessage from '../components/UI/AppMessage/AppMessage';

function QuotesPage() {
    const quotesCtx = useContext(QuotesContext);

    if (quotesCtx.isLoading) return <LoadingSpinner />;

    if (quotesCtx.quotes.length === 0)
        return <AppMessage message='No quote found.' />;

    return <QuotesGrid quotes={quotesCtx.quotes} />;
}

export default QuotesPage;
