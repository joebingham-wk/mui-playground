import React from "react";
import { withStyles, styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
    'root': {
        'background': 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        'border': 0,
        'borderRadius': 3,
        'boxShadow': '0 3px 5px 2px rgba(255, 105, 135, .3)',
        'color': 'white',
        'height': 48,
        'padding': '0 30px',
    },
};

export function HigherOrderComponent(props) {
    const styles = props.classes;
    const className = styles ? styles.root : undefined;

    return <Button className={className || ''}>Styled with HOC API</Button>;
}

export const HigherOrderComponentWithStyles = withStyles(styles)(HigherOrderComponent);

const Nested = withStyles({
    root: {}, // a style rule
    label: {}, // a nested style rule
})(({ classes }) => (
    <button className={classes.root}>
    <span className={classes.label}>
      Nested
    </span>
    </button>
));

export function Parent() {
    return <Nested classes={{ label: 'my-label' }} />
}

export const MyStyledButton = styled(({ color, ...other }) => <Button {...other} />)({
    background: (props) =>
        props.color === 'red'
            ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
            : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: (props) =>
        props.color === 'red'
            ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
            : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
}, {
    meta: 'specific-meta'
});
