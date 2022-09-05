import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
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
                </NavLink>
            </li>
        </ul>
    );
}

export default MainNavigation;
