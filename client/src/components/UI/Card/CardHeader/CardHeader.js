import classes from './CardHeader.module.css';

const CardHeader = (props) => {
    return <div className={classes.header}>{props.children}</div>;
};

export default CardHeader;
