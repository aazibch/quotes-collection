import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

// Method definitions added for better autocompletion in IDE.
const QuotesContext = createContext({
    quotes: [],
    isLoading: true,
    favoriteQuote: (id) => {},
    unfavoriteQuote: (id) => {},
    addNewQuote: (data) => {},
    deleteQuote: (id) => {},
    isFavorite: (id) => {}
});

export function QuotesContextProvider(props) {
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    function showErrorAlert(error) {
        alert(
            error.response?.data.message
                ? error.response.data.message
                : error.message
        );
    }

    useEffect(() => {
        async function getQuotes() {
            try {
                const response = await axios.get('/api/v1/quotes/');

                setQuotes(response.data.data);
            } catch (error) {
                showErrorAlert(error);
            }

            setIsLoading(false);
        }

        getQuotes();
    }, []);

    async function favoriteQuote(quoteId) {
        try {
            await axios.post(`/api/v1/quotes/${quoteId}/favorite`);

            const index = quotes.findIndex((quote) => quote._id === quoteId);
            const updatedQuotes = [...quotes];

            updatedQuotes[index] = { ...updatedQuotes[index], favorited: true };

            setQuotes(updatedQuotes);
        } catch (error) {
            showErrorAlert(error);
        }
    }

    async function unfavoriteQuote(quoteId) {
        try {
            await axios.delete(`/api/v1/quotes/${quoteId}/favorite`);

            const index = quotes.findIndex((quote) => quote._id === quoteId);
            const updatedQuotes = [...quotes];

            updatedQuotes[index] = {
                ...updatedQuotes[index],
                favorited: false
            };

            setQuotes(updatedQuotes);
        } catch (error) {
            showErrorAlert(error);
        }
    }

    async function addNewQuote(quoteData) {
        setIsLoading(true);

        try {
            const response = await axios.post('/api/v1/quotes', quoteData);

            const updatedQuotes = [...quotes];

            updatedQuotes.unshift(response.data.data);
            setQuotes(updatedQuotes);
            navigate('/');
        } catch (error) {
            showErrorAlert(error);
        }

        setIsLoading(false);
    }

    async function deleteQuote(quoteId) {
        try {
            await axios.delete(`/api/v1/quotes/${quoteId}`);

            setQuotes((oldQuotes) =>
                oldQuotes.filter((quote) => quote._id !== quoteId)
            );
        } catch (error) {
            showErrorAlert(error);
        }
    }

    function isFavorite(quoteId) {
        const quote = quotes.find((quote) => quote._id === quoteId);

        return quote.favorited;
    }

    const context = {
        quotes: quotes,
        isLoading: isLoading,
        favoriteQuote: favoriteQuote,
        unfavoriteQuote: unfavoriteQuote,
        addNewQuote: addNewQuote,
        deleteQuote: deleteQuote,
        isFavorite: isFavorite
    };

    return (
        <QuotesContext.Provider value={context}>
            {props.children}
        </QuotesContext.Provider>
    );
}

export default QuotesContext;
