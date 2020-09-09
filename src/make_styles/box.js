import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import React, {createElement} from "react";

const boxStyles = (color) => ({
  height: 100,
  width: 100,
  backgroundColor: color,
});

const standardHeightAndWidth = {
  height: 100,
  width: 100,
}

const useBoxStyles = makeStyles({
  arbitrary: (props) => boxStyles(props.color),
  noProps: boxStyles("red"),
},
    {
      name: "this-is-a-custom-name",
    });

export function BoxWrapper(props) {
  // debugger;
  const styles = useBoxStyles(props);

  return <Box className={styles.arbitrary} />;
}

export function NoPropsBoxWrapper(props) {
  const styles = useBoxStyles();

  return <Box className={styles.noProps} />;
}

const useFunctionStyles = makeStyles((theme) => ({
  root: (props) => ({
    backgroundColor: theme.palette.primary.dark,
    height: props.height,
    width: props.width,
  }),
  noProps: {
    backgroundColor: theme.palette.primary.light,
    ...standardHeightAndWidth,
  },
}));

export function FunctionStylesBoxWrapper(props) {
  const styles = useFunctionStyles(props);

  return <Box className={styles.root} />;
}

export function FunctionStylesNoBoxWrapper(props) {
  const styles = useFunctionStyles();

  return <Box className={styles.noProps} />;
}

const backupTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#008000",
      main: "#FFA500",
      dark: "#0000FF",
    },
  }
});

const useStylesWithOptions = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.primary.light,
      ...standardHeightAndWidth,
    },
  }),
  {
    name: "this-is-a-custom-name",
    defaultTheme: backupTheme,
    flip: true,
  }
);

export function OptionsBoxWrapper(props) {
  const styles = useStylesWithOptions();

  return <Box className={styles.root}>{props.children}</Box>;
}

const stylesWithElementOption = makeStyles({
  root: {
    backgroundColor: 'orange',
    color: 'white',
    ...standardHeightAndWidth,
  },
});

const nestedUseStylesParent = makeStyles({
  'the_parent_class': {
    backgroundColor: 'red',
    color: '#FFF',
    ...standardHeightAndWidth,
  },
  'the_parent_class_with_background_override': {
      backgroundColor: 'orange !important',
      color: '#FFF',
      ...standardHeightAndWidth,
  }
});

const nestedUseStylesChild = makeStyles({
  'the_child_class': {
    backgroundColor: 'blue',
    ...standardHeightAndWidth,
  }
});

function NestedBoxWrapper(props) {
  debugger;
  const classes = nestedUseStylesChild(props);

  return (
      <Box className={classes["the_child_class"]}>
        {props.children}
      </Box>
  );
}

export function ParentBoxWrapper(props) {
  const classes = nestedUseStylesParent();

  return (
      <React.Fragment>
        <Box className={classes["the_parent_class"]}/>
        <NestedBoxWrapper classes={{"the_child_class": classes["the_parent_class"]}}>
          A nested box
        </NestedBoxWrapper>
        <NestedBoxWrapper classes={{"the_child_class": classes["the_parent_class_with_background_override"]}}>
          A nested box
        </NestedBoxWrapper>
      </React.Fragment>
  );
}
