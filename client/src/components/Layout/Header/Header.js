import MainNavigation from './MainNavigation/MainNavigation';

import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <h1>QuotesCollection</h1>
            </div>
            <MainNavigation />
        </header>
    );
}

export default Header;
