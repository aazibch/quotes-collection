import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import QuotesPage from './pages/Quotes';
import AddNewQuotePage from './pages/AddNewQuote';
import FavoritesPage from './pages/Favorites';

function App() {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path='/' element={<QuotesPage />} />
                    <Route path='/new-quote' element={<AddNewQuotePage />} />
                    <Route path='/favorites' element={<FavoritesPage />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
