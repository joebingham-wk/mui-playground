import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import {
    MyStyledButton,
    HigherOrderComponentWithStyles,
    Parent
} from "./mui_basic_example";

import {
    CustomThemedButton,
    SpecifiedIndexButtonWithStyles
} from "./options_examples";

export default function StyledExample() {
    return (
        <React.Fragment>
            {/*<Container>*/}
            {/*    <h4>MUI Docs Examples</h4>*/}
            {/*    <Grid container>*/}
            {/*        <Grid item>*/}
            {/*            <h3>Basic HOC Button</h3>*/}
            {/*        </Grid>*/}
            {/*        <Grid container>*/}
            {/*            <Grid item>*/}
            {/*                <h5>No Styles</h5>*/}
            {/*                <HigherOrderComponent/>*/}
            {/*            </Grid>*/}
            {/*            <Grid item>*/}
            {/*                <h5>Styles</h5>*/}
            {/*                <HigherOrderComponentWithStyles/>*/}
            {/*            </Grid>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</Container>*/}
            {/*<Parent />*/}
            {/*<MyStyledButton color="red">Red</MyStyledButton>*/}
            {/*<MyStyledButton color="blue">Blue</MyStyledButton>*/}
            <SpecifiedIndexButtonWithStyles />
        </React.Fragment>
    )
}