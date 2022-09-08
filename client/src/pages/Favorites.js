import { useContext } from 'react';

import QuotesContext from '../store/quotes-context';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';
import QuotesGrid from '../components/Quotes/QuotesGrid/QuotesGrid';
import AppMessage from '../components/UI/AppMessage/AppMessage';

function FavoritesPage() {
    const quotesCtx = useContext(QuotesContext);
    const favoriteQuotes = quotesCtx.quotes.filter((quote) => quote.favorited);

    if (quotesCtx.isLoading) return <LoadingSpinner />;

    if (favoriteQuotes.length === 0)
        return <AppMessage message='No favorites found.' />;

    return <QuotesGrid quotes={favoriteQuotes} />;
}

export default FavoritesPage;
