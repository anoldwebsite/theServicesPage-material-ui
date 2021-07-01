import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ui/buttonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CallToAction from './ui/callToAction';

import Lottie from 'react-lottie';

import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50em",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30em"
        },
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%"
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    },
    buttonContainer: {
        marginTop: "1em"
    },
    mainContainer: {
        marginTop: "5 sem",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subTitle: {
        marginBottom: "1em"
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em",
            paddingBottom: "8em",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: "100%"
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }
}));

export default function LandingPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoPlay: true,
        animationData: animationData,
        renderSettings: {
            preserveAspectRatio: 'xMidyMid slice',
        }
    };

    return (
        <Grid container direction="column" classes={classes.mainContainer}>
            {/* -----------------------------Code for the hero block-------------------------------- */}
            <Grid item>
                <Grid container justify="flex-end" alignItems="center" direction="row">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography align="center" variant="h2">Brining West Coast Technology<br /> to the Meidwest!</Typography>
                        <Grid container justify="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button variant="contained" component={Link} to="/estimate" className={classes.estimateButton} onClick={() => props.setValue(false)}>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" component={Link} to="/revolution" className={classes.learnButtonHero} onClick={() => props.setValue(2)}>
                                    <span style={{ marginRight: 10 }}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} isStopped={true} />
                    </Grid>
                </Grid>
            </Grid>
            {/* -----------------------------Code for the Custom Software block-------------------------------- */}
            <Grid item>
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: (matchesSM ? 0 : "5em"), textAlign: (matchesSM ? "center" : undefined) }}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subTitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete Digtial Solutions, from investigation to{" "}
                            <span className={classes.specialText}>Celebration</span>
                        </Typography>
                        <Button variant="outlined" component={Link} to="/customsoftware" className={classes.learnButton} onClick={() => { props.setValue(1); props.setSelectedIndex(1) }}>
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img alt="Custom Software Icon" src={customSoftwareIcon} className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>
            {/* -----------------------------Code for the ios/Android Apps block-------------------------------- */}
            <Grid item>
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{ textAlign: (matchesSM ? "center" : undefined) }}>
                        <Typography variant="h4">
                            ios/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subTitle}>
                            Extend Functionality. Extend Access. Increases Engagment.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app{matchesSM ? null : <br />} with either mobile platform.
                        </Typography>
                        <Button variant="outlined" component={Link} to="/mobileapps" className={classes.learnButton} onClick={() => { props.setValue(1); props.setSelectedIndex(2) }}>
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item style={{ marginRight: (matchesSM ? 0 : "5em") }}>
                        <img alt="Mobile Phone Icon" src={mobileAppsIcon} className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>
            {/* -----------------------------Code for the Websites Development block---------------------------- */}
            <Grid item>
                <Grid container direction="row" className={classes.serviceContainer} justify={matchesSM ? "center" : undefined}>
                    <Grid item style={{ marginLeft: (matchesSM ? 0 : "5em"), textAlign: (matchesSM ? "center" : undefined) }}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subTitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, Built for Speed.
                        </Typography>
                        <Button variant="outlined" component={Link} to="/websites" className={classes.learnButton} onClick={() => { props.setValue(1); props.setSelectedIndex(3) }}>
                            <span style={{ marginRight: 10 }}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                        </Button>
                    </Grid>
                    <Grid item>
                        <img alt="Website Icon" src={websitesIcon} className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>
            {/* -----------------------------Code for the Revolution block---------------------------- */}
            <Grid item>
                <Grid container alignItems="center" justify="center" style={{ height: "100em", marginTop: "12em" }}>
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{ textAlign: "center" }}>
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>
                                        The Revolution
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Visionary instights coupled with cutting-edge technology is a recipe for revolution.
                                    </Typography>
                                    <Button variant="outlined" component={Link} to="/revolution" className={classes.learnButtonHero} onClick={() => props.setValue(2)}>
                                        <span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground} /> {/*The card above will be sitting on top of this item.*/}
                </Grid>

            </Grid>
            <Grid item> {/* -----------------------------Code for the info block---------------------------- */}
                <Grid container style={{ height: "80em" }} alignItems="center" direction="row" className={classes.infoBackground}>
                    <Grid item container style={{ textAlign: matchesXS ? "center" : "inherit" }} direction={matchesXS ? "column" : "row"}>
                        <Grid item sm style={{ marginLeft: (matchesXS ? 0 : (matchesSM ? "2em" : "5em")) }}>
                            <Grid container direction="column" style={{ marginBottom: matchesXS ? "10em" : 0 }}>
                                <Typography variant="h2" style={{ color: "white" }}>About US</Typography>
                                <Typography variant="subtitle2">Let's get personal</Typography>
                                <Grid item>
                                    <Button variant="outlined" component={Link} to="/about" className={classes.learnButton} style={{ color: "white", borderColor: "white" }} onClick={() => props.setValue(3)}>
                                        <span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm style={{ marginRight: (matchesXS ? 0 : (matchesSM ? "2em" : "5em")), textAlign: matchesXS ? "center" : "right" }}>
                            <Grid container direction="column">
                                <Typography variant="h2" style={{ color: "white" }}>Contact US</Typography>
                                <Typography variant="subtitle2">
                                    Say Hello!
                                    <span role="img" aria-label="waving hand">👋 </span>
                                </Typography>
                                <Grid item>
                                    <Button variant="outlined" component={Link} to="/contact" className={classes.learnButton} style={{ color: "white", borderColor: "white" }} onClick={() => props.setValue(4)}>
                                        <span style={{ marginRight: 10 }}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* Code ofr the Call To Action Block as a Component as we will reuse it in different places in this app. */}
            <Grid item>
                <CallToAction setValue={props.setValue} />
            </Grid>
        </Grid>
    );
}