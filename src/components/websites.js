import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';

import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreach from '../assets/outreach.svg';
import ecommerce from '../assets/ecommerce.svg';

import CallToAction from './ui/callToAction';


const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: "40em"
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        }
    },
    paragraphContainer: {
        maxWidth: "30em"
    }
}));

export default function Websites(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Grid container direction="column">
            {/* Row with two arrows, a heading for the page and 3 paragraphs of text */}
            <Grid item container direction="row" justify={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{ marginTop: matchesXS ? "1em" : "2em" }}>
                {/* Backward Arrow - Hidden on mobile screens*/}
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
                            <img src={backArrow} alt="Back to ios/Android App Development Page" />
                        </IconButton>
                    </Grid>
                </Hidden>

                {/* 4 pargraphs of Text with header Custom Software Development*/}
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center" : undefined}>Website Development</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            Having a website is a necessity in today's business world. They give you once central, pulbic location to let people know who you are, what you do, and whay you're the best at it.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            From simply having your business opening hours posted to having a full fledged online store, making yourself as accessile as possible to users online drives growth and enables you to reach new customers.
                        </Typography>
                    </Grid>
                </Grid>
                {/* Forward Arrow - Hidden on mobile screens*/}
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
                            <img src={forwardArrow} alt="Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            {/* New Row - Analytics section  */}
            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer} style={{ marginTop: "15em" }}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>Analytics</Typography>
                        </Grid>
                        <Grid item>
                            <img src={analytics} style={{ marginLeft: "-2.75em" }} alt="Graph with magnigying glass revealing 1's and 0's" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1">
                        Knowledge is power, and data is 21st century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.
                    </Typography>
                </Grid>
            </Grid>
            {/* New Row - Ecommerce section */}
            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" justify="flex-end" className={classes.rowContainer} style={{ marginTop: "15em", marginBottom: "15em" }}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" align="center" gutterBottom>E-Commerce</Typography>
                        </Grid>
                        <Grid item>
                            <img src={ecommerce} alt="World outline made of dollar signs" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{ marginLeft: matchesSM ? "0em" : "1em" }} className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        It's no secret that people like to shop online. During the Covid-19 pandemic, the on line shopping increased by many folds and people most probably will continue to shop on line even after the pandemic.
                    </Typography>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        The global ecommerce market is expected to total $4.89 trillion in 2021. That figure is estimated to grow over the next few years, showing that borderless ecommerce is becoming a profitable option for online retailers.
                        Two years ago, only 13.6% of sales were made from online purchases. Today, that number is expected to reach 19.5% in 2021, a 45.8% increase in ecommerce market share over two years. Growth is expected to continue, reaching 21.8% by 2024, which translates to an 8.2 percentage point increase in just five years.  . It's time for your slice of that pie.
                    </Typography>
                </Grid>
            </Grid>
            {/* New Row -  Outreach section */}
            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>Outreach</Typography>
                        </Grid>
                        <Grid item>
                            <img src={outreach} alt="Megaphone" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{ marginLeft: matchesSM ? "0em" : "1em" }} className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1">
                        Attract potential customers with a dazzling website. Displaying your products online is a great way to help customers decide what's right for them before visiting in person or ordering it on competitors' website.
                    </Typography>
                </Grid>
            </Grid>
            {/* New Row -  SEO section */}
            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" justify="flex-end" className={classes.rowContainer} style={{ marginTop: "15em", marginBottom: "15em" }}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" align="center" gutterBottom>Searh Enigne<br />Optimization</Typography>
                        </Grid>
                        <Grid item>
                            <img src={seo} alt="Website standing on winner's podium" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer} style={{ marginLeft: matchesSM ? "0em" : "1em" }}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        How often have you ever been to the second page of Google search results?
                    </Typography>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        If you are like most surfers on the Interenet, probably never.
                    </Typography>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        Customers don't bother to visit other pages of a Google search result. So, we make sure your website is designed to end up on top or at leat on the first page.
                    </Typography>
                </Grid>
            </Grid>
            {/* New Row -  Call To Action Component section */}
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    )
}