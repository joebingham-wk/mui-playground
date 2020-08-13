import React from 'react';
import logo from './logo.svg';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
      'backgroundColor': 'gray',
      'width': '100%',
      'height': 500,
  }
})


let boxStyles = color => ({
    'height': 100,
    'width': 100,
    backgroundColor: color,
});

const useBoxStyles = makeStyles({
    'arbitrary': props => boxStyles(props.color),
    'noProps': boxStyles('red'),
});

function BoxWrapper(props) {
    debugger;
    const styles = useBoxStyles(props);

    return <Box className={styles.arbitrary}/>
}

function NoPropsBoxWrapper(props) {
    const styles = useBoxStyles();

    return <Box className={styles.noProps}/>
}

const useFunctionStyles = makeStyles(theme => ({
    root: props => ({
        backgroundColor: theme.backgroundColor,
        height: props.height,
        width: props.width,
    })
}));


function FunctionStylesBoxWrapper(props) {
    const styles = useFunctionStyles(props);

    return <Box className={styles.root}/>
}

function App() {

    const styles = useStyles();

  return (
    <Container classes={{
        root: styles.root,
    }
    }>
        <BoxWrapper color={'blue'}/>
        <NoPropsBoxWrapper/>
        <FunctionStylesBoxWrapper height={100} width={100}/>
    </Container>
  );
}

export default App;
