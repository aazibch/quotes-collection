import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Method definitions added for better autocomplete in IDE.
const FavoritesContext = createContext({
    favorites: [],
    favoritesLength: 0,
    addToFavoriteQuotes: (id) => {},
    removeFromFavoriteQuotes: (id) => {},
    isFavorite: (id) => {}
});

export function FavoritesContextProvider(props) {
    const [favoriteQuotes, setFavoriteQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function showErrorAlert(error) {
        alert(
            error.response?.data.message
                ? error.response.data.message
                : error.message
        );
    }

    useEffect(() => {
        async function getFavoriteQuotes() {
            try {
                const response = await axios.get('/api/v1/quotes/favorites');

                setFavoriteQuotes(response.data.data);
            } catch (error) {
                showErrorAlert(error);
            }

            setIsLoading(false);
        }

        getFavoriteQuotes();
    }, []);

    async function addToFavoriteQuotes(quoteId) {
        try {
            const response = await axios.post(
                `/api/v1/quotes/${quoteId}/favorite`
            );

            setFavoriteQuotes((prevState) =>
                prevState.concat(response.data.data)
            );
        } catch (error) {
            showErrorAlert(error);
        }
    }

    async function removeFromFavoriteQuotes(quoteId) {
        try {
            await axios.delete(`/api/v1/quotes/${quoteId}/favorite`);

            setFavoriteQuotes((prevState) =>
                prevState.filter((quote) => quote._id !== quoteId)
            );
        } catch (error) {
            showErrorAlert(error);
        }
    }

    function isFavorite(quoteId) {
        return favoriteQuotes.some((quote) => quote._id === quoteId);
    }

    const context = {
        favorites: favoriteQuotes,
        totalFavorites: favoriteQuotes.length,
        favoritesLoading: isLoading,
        addToFavoriteQuotes: addToFavoriteQuotes,
        removeFromFavoriteQuotes: removeFromFavoriteQuotes,
        isFavorite: isFavorite
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;
