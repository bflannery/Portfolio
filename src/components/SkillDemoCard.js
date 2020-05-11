import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    detailsContainer: {
        backgroundColor: '#2B2B2B',
        minWidth: 275,
    },
}))

export default function SkillDemoCard() {
    const classes = useStyles();

    const cardTitle = (
        <Typography className={classes.title} variant="h3">
            Demo
        </Typography>
    )
    return (
        <Card className={classes.detailsContainer} variant="outlined" >
            <CardHeader title={cardTitle} style={{ borderBottom: '1px solid white'}} />
            <CardContent>
                HTML EXAMPLES
            </CardContent>
        </Card>
    )
}
