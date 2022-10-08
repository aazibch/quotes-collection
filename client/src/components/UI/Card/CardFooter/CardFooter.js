import classes from './CardFooter.module.css';

const CardFooter = (props) => {
    return <div className={classes.footer}>{props.children}</div>;
};

export default CardFooter;
