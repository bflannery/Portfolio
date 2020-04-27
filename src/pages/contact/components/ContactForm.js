import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    contactFormRoot: {
        textAlign: 'center',
        margin: '0 auto',
        height: '450px',
        flexBasis: '600px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    },
    messageFormControl: {
        width: '100%'
    },
    message: {
        borderColor: 'rgba(0, 0, 0, 0.23)',
        borderRadius: '4px'
    },
    submitContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    formField: {
        marginBottom: '0.5rem',
        backgroundColor: '#2B2B2B',
        color: theme.palette.text.secondary,
        '& label': {
            color: theme.palette.text.secondary,
        }

    }

}))

export default function ContactForm() {
    const classes = useStyles();

    return (
        <form
            className={classes.contactFormRoot}
            noValidate
        >
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <TextField color="secondary" className={classes.formField} fullWidth id="outlined-basic" label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField className={classes.formField} fullWidth id="outlined-basic" label="Email" variant="outlined" />
                </Grid>
            </Grid>

            <Grid item xs={12}>
            <TextField fullWidth className={classes.formField} id="outlined-basic" label="Subject" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    className={classes.formField}
                    fullWidth
                    multiline
                    label="Message"
                    rows="6"
                    variant="outlined"
                />
            </Grid>
            <div className={classes.submitContainer}>
                <Button size={"small"} variant="contained">Send</Button>
            </div>
        </form>
    )
}
