import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';


const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]: {
            width: "21em"
        },
        [theme.breakpoints.down("xs")]: {
            width: "15em"
        }
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"//For removing the underline from the links in the footer.
    },
    gridItem: {
        margin: "3em"
    },
    icon: {
        height: "4em",
        weight: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em"
        }
    },
    socialContianer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down("xs")]: {
            right: "0.6em"
        }
    }
}));

export default function Footer(props) {
    const classes = useStyles();
    const { value, setValue, selectedIndex, setSelectedIndex } = props;//The Footer components is getting props from App component in moudle App.js
    //mdDown is for media with screen size medium and smaller. Breakpoint for smaller screens to hide the links in the footer.
    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/" className={classes.link} onClick={() => setValue(0)}>
                                Home
                        </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/services" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(0) }}>Services</Grid>
                            <Grid item component={Link} to="/customsoftware" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(1) }}>Custom Software Development</Grid>
                            <Grid item component={Link} to="/mobileapps" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(2) }}>ios/Android App Development</Grid>
                            <Grid item component={Link} to="/websites" className={classes.link} onClick={() => { setValue(1); setSelectedIndex(3) }}>Website Development</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>The Revolution</Grid>
                            <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>Vision</Grid>
                            <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>Technology</Grid>
                            <Grid item component={Link} to="/revolution" className={classes.link} onClick={() => setValue(2)}>Process</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/about" className={classes.link} onClick={() => setValue(3)}>About Us</Grid>
                            <Grid item component={Link} to="/about" className={classes.link} onClick={() => setValue(3)}>History</Grid>
                            <Grid item component={Link} to="/about" className={classes.link} onClick={() => setValue(3)}>Team</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/contact" className={classes.link} onClick={() => setValue(4)}>Contact Us</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img alt="Black decorative slash image" src={footerAdornment} className={classes.adornment} />

            <Grid container justify="flex-end" spacing={2} className={classes.socialContianer}>
                <Grid item component={"a"} href="https://facebook.com" rel="noopener noreferrer" target="_blank">
                    <img alt="facebook logo" src={facebook} className={classes.icon} rel="noopener noreferrer" target="_blank" />
                </Grid>
                <Grid item component={"a"} href="https://twitter.com">
                    <img alt="twitter logo" src={twitter} className={classes.icon} rel="noopener noreferrer" target="_blank" />
                </Grid>
                <Grid item component={"a"} href="https://www.instagram.com">
                    <img alt="instagram logo" src={instagram} className={classes.icon} rel="noopener noreferrer" target="_blank" />
                </Grid>
            </Grid>
        </footer>
    );
}