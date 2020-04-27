import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ContactForm from "./components/ContactForm";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
       flexGrow: 1,
    },
    leftContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    formTitleContainer: {
        marginBottom: '1rem'
    },
    contactFormContainer: {

    },
    paper: {
        height: '100vh'
    },
    rightContainer: {
    }

}))

export default function Contact() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Grid container spacing={2}>
                <Grid
                    className={classes.leftContainer}
                    lg={5}
                    xs={12}
                    item
                >
                    <Container className={classes.contactFormContainer}>
                        <Typography
                            variant="h2"
                            className={classes.formTitleContainer}
                        > Contact Me </Typography>
                        <ContactForm />
                    </Container>
                </Grid>
                <Grid
                    className={classes.rightContainer}
                    lg={7}
                    xs={12}
                    item
                >
                    <Paper className={classes.paper}>
                        Location Layout
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}
