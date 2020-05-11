import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SkillCard from "./components/SkillCard";

const useStyles = makeStyles( {
    root: {
        flexGrow: 1,
    },
});

const skills = {
    html: {
        key: 'html',
        title: 'HTML',
        description: 'a computer language devised to allow website creation'
    },
    css: {
        key: 'css',
        title: 'CSS',
        description: 'used to define styles for your web pages'
    },
    javascript: {
        key: 'javascript',
        title: 'Javascript',
        description: 'is a lightweight, interpreted programming language'
    },
    react: {
        key: 'react',
        title: 'React',
        description: 'React is a UI library'
    },
    redux: {
        key: 'redux',
        title: 'Redux',
        description: 'State management library'
    },
    webpack: {
        key: 'webpack',
        title: 'Webpack',
        description: 'Application file bundler'
    },
    python: {
        key: 'python',
        title: 'Python',
        description: 'is an interpreted, general-purpose programming language'
    },
    falcon: {
        key: 'falcon',
        title: 'Falcon',
        description: 'Application file bundler'
    },
    alchemy: {
        key: 'alchemy',
        title: 'SQLAlchemy',
        description: 'Application file bundler'
    },
    mysql: {
        key: 'mysql',
        title: 'MySQL',
        description: 'Relational Database'
    },
    mongo: {
        key: 'mongo',
        title: 'MongoDB',
        description: 'Non-Relational Database'
    },
    aws: {
        key: 'aws',
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
                    <Grid item lg={4}>
                        <SkillCard skill={skills['html']} />
                    </Grid>
                    <Grid item lg={4}>
                        <SkillCard skill={skills['css']} />
                    </Grid>
                    <Grid item lg={4}>
                        <SkillCard skill={skills['javascript']} />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.skillsRow}
                    container
                    spacing={3}
                >
                    <Grid item lg={4}>
                        <SkillCard skill={skills['react']} />
                    </Grid>
                    <Grid item lg={4}>
                        <SkillCard skill={skills['redux']} />
                    </Grid>
                    <Grid item lg={4}>
                        <SkillCard skill={skills['webpack']} />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.skillsRow}
                    container
                    spacing={3}
                >
                    <Grid item lg={4}>
                        <SkillCard skill={skills['python']} />
                    </Grid>
                    <Grid item lg={4}>
                        <SkillCard skill={skills['falcon']} />
                    </Grid>
                    <Grid item lg={4}>
                        <SkillCard skill={skills['alchemy']} />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.skillsRow}
                    container
                    spacing={3}
                >
                    <Grid item lg={4}>
                        <SkillCard skill={skills['mysql']} />
                    </Grid>
                    <Grid item lg={4}>
                        <SkillCard skill={skills['mongo']} />
                    </Grid>
                    <Grid item lg={4}>
                        <SkillCard skill={skills['aws']} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
