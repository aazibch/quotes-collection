import { useState, useEffect } from 'react';
import axios from 'axios';
import PuffLoader from 'react-spinners/PuffLoader';

import QuotesGrid from '../components/Quotes/QuotesGrid/QuotesGrid';

function QuotesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        async function fetchQuotes() {
            try {
                const response = await axios.get('/api/v1/quotes');

                setQuotes(response.data.data);
                console.log('response', response);
            } catch (error) {
                alert(
                    error.response?.data.message
                        ? error.response.data.message
                        : error.message
                );
            }

            setIsLoading(false);
        }

        fetchQuotes();
    }, []);

    if (isLoading) return <PuffLoader />;

    return <QuotesGrid quotes={quotes} />;
}

export default QuotesPage;
