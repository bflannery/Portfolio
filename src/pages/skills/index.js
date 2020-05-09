import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SkillCard from "./components/SkillCard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    skillsRow: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
}));

const skills = {
    react: {
        title: 'React',
        description: 'React is a UI library'
    },
    redux: {
        title: 'Redux',
        description: 'State management library'
    },
    webpack: {
        title: 'Webpack',
        description: 'Application file bundler '
    }
}

export default function Skills() {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Grid container spacing={3}>
                <Grid
                    className={classes.skillsRow}
                    lg={12}
                    xs={12}
                    item
                >
                    <SkillCard skill={skills['react']} />
                    <SkillCard skill={skills['redux']} />
                    <SkillCard skill={skills['webpack']} />
                </Grid>
            </Grid>
        </Grid>
    )
}
