import classes from './Button.module.css';

const Button = (props) => {
    const buttonClasses = [props.className];

    if (props.kind === 'plain') {
        buttonClasses.push(classes.plainButton);
    }

    if (!props.kind) {
        buttonClasses.push(classes.button);
    }

    if (props.size === 'large') {
        buttonClasses.push(classes.button_large);
    }

    return (
        <button className={buttonClasses.join(' ')} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
