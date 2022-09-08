import classes from './AppMessage.module.css';

function AppMessage(props) {
    return <p className={classes.appMessage}>{props.message}</p>;
}

export default AppMessage;
