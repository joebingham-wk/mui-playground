import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import React from "react";

// const rtlTheme = createMuiTheme({
//   direction: "ltr",
// });

const useStyles = makeStyles({
  root: (props) => ({
    backgroundColor: props.color || "gray",
    width: "100%",
    height: 500,
  }),
}, {
  flip: null,
});

export default function ContainerWrapper(props) {
  const styles = useStyles(props);

  return <Container className={styles.root}>{props.children}</Container>;
}
