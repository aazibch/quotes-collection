import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import NewQuoteForm from '../components/Quotes/NewQuoteForm/NewQuoteForm';
import LoadingSpinner from '../components/UI/LoadingSpinner/LoadingSpinner';

function AddNewQuotePage() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function submitQuoteHandler(quoteData) {
        async function postQuote() {
            setIsLoading(true);
            try {
                await axios.post('/api/v1/quotes', quoteData);

                navigate('/');
            } catch (error) {
                alert(
                    error.response?.data.message
                        ? error.response.data.message
                        : error.message
                );

                setIsLoading(false);
            }
        }

        postQuote();
    }

    if (isLoading) return <LoadingSpinner />;

    return <NewQuoteForm submitQuoteHandler={submitQuoteHandler} />;
}

export default AddNewQuotePage;
