import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';
import QuotesGrid from '../components/Quotes/QuotesGrid/QuotesGrid';

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    if (favoritesCtx.favoritesLoading) return <LoadingSpinner />;

    return <QuotesGrid quotes={favoritesCtx.favorites} />;
}

export default FavoritesPage;
