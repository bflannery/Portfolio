import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#2B2B2B',
        minWidth: 275,
    },
    title: {
        margin: 0
    },
    skillRow: {
        margin: '1rem 0'
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

    const renderExperienceStars = () => (
        <>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
        </>
    )

    const renderDifficultyStar = () => (
        <>
            <StarIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
            <StarBorderIcon />
        </>
    )

    return (
        <Card className={classes.root} variant="outlined" onClick={handleRouteSkill}>
            <CardHeader title={cardTitle} style={{ borderBottom: '1px solid white'}} />
            <CardContent>
                <div className={classes.skillRow}>
                    <Typography variant="h4" color="textSecondary">
                        <b>Experience :</b> {renderExperienceStars()}
                    </Typography>
                </div>
                <div className={classes.skillRow}>
                    <Typography variant="h4" color="textSecondary">
                        <b>Level Of Difficulty :</b> {renderDifficultyStar()}
                    </Typography>
                </div>
                <div className={classes.skillRow}>
                    <Typography variant="h4" color="textSecondary">
                        <b>Description</b>: HTML stands for <b>Hypertext Markup Language</b>.
                            It allows the user to create and structure sections, paragraphs, headings, links,
                            and blockquotes for web pages and applications.

                        <p>HTML is not a programming language, meaning it doesn’t have the ability to
                            create dynamic functionality. Instead, it makes it possible to organize and format
                            documents, similarly to Microsoft Word.</p>

                        <p>
                            {`When working with HTML, we use simple code structures (tags and attributes)
                                to mark up a website page. For example, we can create a paragraph by placing
                                the enclosed text within a starting <p> and closing </p> tag.`}
                        </p>
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}
