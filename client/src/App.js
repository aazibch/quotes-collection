import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import QuotesContext from './store/quotes-context';
import QuotesPage from './pages/Quotes';
import AddNewQuotePage from './pages/AddNewQuote';
import FavoritesPage from './pages/Favorites';
import Modal from './components/UI/Modal/Modal';

function App() {
    const quotesCtx = useContext(QuotesContext);

    return (
        <div>
            <Layout>
                {quotesCtx.error && (
                    <Modal title="Error" content={quotesCtx.error} />
                )}

                <Routes>
                    <Route path="/" element={<QuotesPage />} />
                    <Route path="/new-quote" element={<AddNewQuotePage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
