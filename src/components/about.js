import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import history from '../assets/history.svg';
import profile from '../assets/founder.jpg';
import yearBook from '../assets/yearbook.svg';
import puppy from '../assets/puppy.svg';

import CallToAction from './ui/callToAction';
import Call from 'es-abstract/2015/Call';

const useStyles = makeStyles(theme => ({
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
    avatar: {
        height: "25em",
        width: "25em",
        [theme.breakpoints.down("sm")]: {
            height: "20em",
            width: "20em",
            maxHeight: 300,
            maxWidth: 300
        }
    }
}))

export default function About(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{ marginTop: matchesMD ? "1em" : "2em" }}>
                <Typography variant="h2" align={matchesMD ? "center" : undefined}>About Us</Typography>
            </Grid>
            <Grid item container justify="center" className={classes.rowContainer} style={{ marginTop: "3em" }}>
                <Typography variant="h4" align="center" className={classes.missionStatement}>
                    Whether it be person to person, business to consumer or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast modern, inexpensive, and aesthetic software to the Midwest and beyond.
                </Typography>
            </Grid>
            <Grid
                item
                container
                className={classes.rowContainer}
                justify="space-around"
                direction={matchesMD ? "column" : "row"}
                alignItems={matchesMD ? "center" : undefined}
                style={{ marginTop: "10em", marginBottom: "10em" }}>

                <Grid item>
                    <Grid item container direction="column" lg style={{ maxWidth: "35em" }}>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph style={{ fontWeight: 700, fontStyle: "italic" }}>
                                We're the new kid on the block
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                                Founded in 2019, we're ready to get our hands on the world's business problems.
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                                It all started with one question: Why aren't all businesses using available techonolgy. There are many different answers to that question: economic varriers, social barriers, educational barriers, and sometimes institutional barriers.
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                                We aim to be a powerful force in overcoming these obstacles. Recent developmments in software engineering and computing power, compounded by the profliferation of smart phones, has opened up infinite worlds of possibility. Things that have always been done by hand can now be done digitally and automatically, and completly new mehtods of interaction are created daily. Taking full advantage of the advancements is the name of the game.
                            </Typography>
                            <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                                All this change can be a lot to keep up with, and that's where we come in.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item container justify="center" lg>
                        <img src={history} alt="quill pen sitting on top of a book" style={{ maxHeight: matchesMD ? 200 : "22em" }} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction="column" className={classes.rowContainer} alignItems="center">
                <Grid item>
                    <Typography variant="h4" gutterBottom align="center">
                        Team
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Dilshad Rana, Founder
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        He started coding 30 years ago.
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar src={profile} alt="founder" className={classes.avatar} />
                </Grid>
            </Grid>
            <Grid item container justify={matchesMD ? "center" : undefined} style={{ marginBottom: "15em" }}>
                <Hidden lgUp>
                    <Grid item style={{ maxWidth: "45em", padding: "1.25em" }} lg>
                        <Typography variant="body1" align="center" paragraph>
                            I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning - learning about computers, learning mathematics and philosophy, studying design, always just learning.
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            Now, I'm ready to apply everything I've learned, and to help others with the intuition I have developed.
                        </Typography>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" lg alignItems={matchesMD ? "center" : undefined} style={{ marginBottom: matchesMD ? "2.5em" : 0 }}>
                    <Grid item>
                        <img src={yearBook} alt="yearbook page about founder" style={{ maxWidth: matchesMD ? 300 : undefined }} />
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">
                            a page from my Sophomore yearbook
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item style={{ maxWidth: "45em", padding: "1.25em" }} lg>
                        <Typography variant="body1" align="center" paragraph>
                            I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning - learning about computers, learning mathematics and philosophy, studying design, always just learning.
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            Now, I'm ready to apply everything I've learned, and to help others with the intuition I have developed.
                        </Typography>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" lg alignItems={matchesMD ? "center" : "flex-end"}>
                    <Grid item>
                        <img src={puppy} alt="grey spotted puppy" style={{ maxWidth: matchesMD ? 300 : undefined }} />
                    </Grid>
                    <Grid item>
                        <Typography variant="caption">my miniature dapple dachshund, Sterling</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    )
}