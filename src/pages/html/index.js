import React from 'react'
import SkillCard from "../../components/SkillCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SkillDemoCard from "../../components/SkillDemoCard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    leftContainer: {
    },
    formTitleContainer: {
        marginBottom: '1rem'
    },
    detailsContainer: {
        backgroundColor: '#2B2B2B',
        minWidth: 275,
    },
    paper: {
        height: '100vh'
    },
    rightContainer: {
    }

}))


const skillObject = {
    html: {
        key: 'html',
        title: 'HTML',
        description: 'a computer language devised to allow website creation'
    }
}
export default function HTML() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Grid container spacing={1}>
                <Grid
                    className={classes.leftContainer}
                    lg={5}
                    xs={12}
                    item
                >
                    <SkillCard skill={skillObject['html']} />
                </Grid>
                <Grid
                    className={classes.leftContainer}
                    lg={7}
                    xs={12}
                    item
                >
                    <SkillDemoCard />
                </Grid>
            </Grid>
        </Grid>

    )
}
