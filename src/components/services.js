import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonArrow from './ui/buttonArrow';

import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
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
        marginTop: "10em",
        [theme.breakpoints.down("sm")]: {
            padding: 25
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    }
}));

export default function Services(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column">
            <Grid
                item
                style={{
                    marginLeft: matchesSM ? 0 : "5em",
                    marginTop: matchesSM ? "1em" : "2em"
                }}
            >
                <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="h2"
                    gutterBottom
                >
                    Services
                </Typography>
            </Grid>
            {/* -----------------------------Code for the ios/Android Apps block-------------------------------- */}
            <Grid item>
                <Grid
                    container
                    direction="row"
                    className={classes.serviceContainer}
                    justify={matchesSM ? "center" : "flex-end"}
                    style={{ marginTop: matchesSM ? "1em" : "5em" }}
                >
                    <Grid
                        item
                        style={{
                            textAlign: matchesSM ? "center" : undefined,
                            width: matchesSM ? undefined : "35em"
                        }}
                    >
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
                        <img alt="Mobile Phone Icon" src={mobileAppsIcon} width="250px" className={classes.icon} />
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
            {/* -----------------------------Code for the Websites Development block---------------------------- */}
            <Grid item>
                <Grid
                    container
                    direction="row"
                    className={classes.serviceContainer}
                    justify={matchesSM ? "center" : "flex-end"}
                    style={{ marginBottom: "10em" }}
                >
                    <Grid
                        item
                        style={{
                            textAlign: matchesSM ? "center" : undefined,
                            width: matchesSM ? undefined : "35em"
                        }}
                    >
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
                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
                        <img alt="Website Icon" src={websitesIcon} width="250px" className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}