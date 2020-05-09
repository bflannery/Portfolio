import React, {useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SkillCard from "./components/SkillCard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const skills = {
    javascript: {
        title: 'Javascript',
        description: 'is a lightweight, interpreted programming language'
    },
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
        description: 'Application file bundler'
    },
    python: {
        title: 'Python',
        description: 'is an interpreted, general-purpose programming language'
    },
    falcon: {
        title: 'Falcon',
        description: 'Application file bundler'
    },
    alchemy: {
        title: 'SQLAlchemy',
        description: 'Application file bundler'
    },
    mysql: {
        title: 'MySQL',
        description: 'Relational Database'
    },
    mongo: {
        title: 'MongoDB',
        description: 'Non-Relational Database'
    },
    aws: {
        title: 'AWS',
        description: 'Cloud Computing'
    }
}

export default function Skills() {
    const classes = useStyles();

    return (
        <Grid className={classes.root} spacing={2}>
            <Grid xs={12} item>
                <Grid
                    className={classes.skillsRow}
                    container
                    spacing={3}
                >
                    <Grid item>
                        <SkillCard skill={skills['javascript']} />
                    </Grid>
                    <Grid item>
                        <SkillCard skill={skills['react']} />
                    </Grid>
                    <Grid item>
                        <SkillCard skill={skills['redux']} />
                    </Grid>
                    <Grid item>
                        <SkillCard skill={skills['webpack']} />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.skillsRow}
                    container
                    spacing={3}
                >
                    <Grid item>
                        <SkillCard skill={skills['python']} />
                    </Grid>
                    <Grid item>
                        <SkillCard skill={skills['falcon']} />
                    </Grid>
                    <Grid item>
                        <SkillCard skill={skills['alchemy']} />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.skillsRow}
                    container
                    spacing={3}
                >
                    <Grid item>
                        <SkillCard skill={skills['mysql']} />
                    </Grid>
                    <Grid item>
                        <SkillCard skill={skills['mongo']} />
                    </Grid>
                    <Grid item>
                        <SkillCard skill={skills['alchemy']} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
