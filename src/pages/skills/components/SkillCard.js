import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#2B2B2B',
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        margin: 0
    },
    pos: {
        marginBottom: 12,
    },
    learnMoreButton: {
        color: theme.palette.secondary.main,
    }
}));

export default function SkillCard({ skill }) {
    const classes = useStyles();

    const history = useHistory();

    const handleRouteSkill = () => history.push(`/skills/${skill.key}`);

    const cardTitle = (
        <Typography className={classes.title} variant="h3">
            {skill.title}
        </Typography>
    )

    return (
        <Card className={classes.root} variant="outlined" onClick={handleRouteSkill}>
            <CardHeader title={cardTitle} />
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    {skill.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button className={classes.learnMoreButton} size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
