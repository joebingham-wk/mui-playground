import React from "react";
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const backupTheme = {
    palette: {
        primary: {
            'light': '#008000',
            'main': '#FFA500',
            'dark': '#0000FF',
        }
    }
}

function themedStyles({theme}) {
    return {
        backgroundColor: theme?.palette?.primary?.dark,
    };
}

export const CustomThemedButton = styled((props) => {
    console.log(props);
    return (
        <Button className={props.className}>
            Themed Button
        </Button>
    );
})(themedStyles, {
    defaultTheme: backupTheme,
});

export const SpecifiedIndexButtonWithStyles = styled(
    (props) => {
        return (
            <Button className={props.className}>
                With Specified Index
            </Button>
        )
    }
)(
    themedStyles,
    {index: 1, meta: 'This should be the last style tag in the header'})

export const MiscOptionsWithStyles = styled(
    (props) => {
        return (
            <Button className={props.className}>
                With Specified Index
            </Button>
        )
    }
)(
    themedStyles,
    {name: 'this-is-a-custom-name', meta: 'this meta is set manually'})
