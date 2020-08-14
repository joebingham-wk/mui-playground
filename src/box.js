import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import React from "react";

let boxStyles = (color) => ({
  height: 100,
  width: 100,
  backgroundColor: color,
});

const useBoxStyles = makeStyles({
  arbitrary: (props) => boxStyles(props.color),
  noProps: boxStyles("red"),
});

export function BoxWrapper(props) {
  debugger;
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
    height: 100,
    width: 100,
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
  },
  direction: "rtl",
});

const useStylesWithOptions = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: theme.palette.primary.light,
      height: 100,
      width: 100,
    },
  }),
  {
    name: "this-is-a-custom-name",
    defaultTheme: backupTheme,
  }
);

export function OptionsBoxWrapper(props) {
  const styles = useStylesWithOptions();

  return <Box className={styles.root}>{props.children}</Box>;
}
