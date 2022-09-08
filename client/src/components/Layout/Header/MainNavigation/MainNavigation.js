import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import QuotesContext from '../../../../store/quotes-context';
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const quotesCtx = useContext(QuotesContext);
    const favoritesCount = quotesCtx.quotes.filter(
        (quote) => quote.favorited
    ).length;

    return (
        <ul className={classes.mainNavigation}>
            <li>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? classes.active : ''
                    }
                    to='/'
                >
                    Quotes
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? classes.active : ''
                    }
                    to='/new-quote'
                >
                    Add New Quote
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={(navData) =>
                        navData.isActive ? classes.active : ''
                    }
                    to='/favorites'
                >
                    Favorites
                    <span className={classes.badge}>{favoritesCount}</span>
                </NavLink>
            </li>
        </ul>
    );
}

export default MainNavigation;
