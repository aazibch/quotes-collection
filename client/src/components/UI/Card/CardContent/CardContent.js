import classes from './CardContent.module.css';

const CardContent = (props) => {
    return <div className={classes.content}>{props.children}</div>;
};

export default CardContent;
