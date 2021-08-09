import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

import ButtonArrow from './ui/buttonArrow';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: 0,
            marginRight: 0
        }
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "5em",
        borderRadius: 5
    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }
}));

export default function Contact(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Grid container direction="row">
            <Grid item container direction="column" justify="center" alignItems="center" style={{ marginTop: matchesSM ? "1em" : (matchesMD ? "5em" : 0), marginBottom: matchesMD ? "5em" : 0 }} lg={4} xl={3}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2" align={matchesMD ? "center" : undefined} style={{ lineHeight: 1 }}>Contact Us</Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} style={{ color: theme.palette.common.blue }}>We're waiting</Typography>
                        </Grid>
                        <Grid item container style={{ marginTop: "2em" }}>
                            <Grid item>
                                <img src={phoneIcon} alt="phone" style={{ marginRight: "0.5em" }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>(0092) 346-779983</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{ marginBottom: "2em" }}>
                            <Grid item>
                                <img src={emailIcon} alt="envelope" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" style={{ color: theme.palette.common.blue, fontSize: "1rem" }}>anoldwebsite@gmail.com</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" style={{ maxWidth: "20em" }}>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField fullWidth label="Name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                            </Grid>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField fullWidth label="Email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </Grid>
                            <Grid item style={{ marginBottom: "0.5em" }}>
                                <TextField fullWidth label="Phone" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
                            </Grid>
                        </Grid>
                        <Grid item style={{ maxWidth: "20em" }}>
                            <TextField fullWidth InputProps={{ disableUnderline: true }} multiline rows={10} className={classes.message} id="message" value={message} onChange={(event) => setMessage(event.target.value)} />
                        </Grid>
                        <Grid item container justify="center" style={{ marginTop: "2em" }}>
                            <Button variant="contained" className={classes.sendButton}>Send Message
                                <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"} justify={matchesMD ? "center" : undefined} className={classes.background} alignItems="center" lg={8} xl={9}>
                <Grid item style={{ marginLeft: (matchesMD ? 0 : "3em"), textAlign: matchesMD ? "center" : "inherit" }}>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h2" align={matchesMD ? "center" : undefined}>Simple Software. <br /> Revolutionary Results.</Typography>
                            <Typography variant="subtitle2" align={matchesMD ? "center" : undefined} style={{ fontSize: "1.5rem" }}>Take advantage of the 21st century.</Typography>
                            <Grid container item justify={matchesMD ? "center" : undefined}>
                                <Button variant="outlined" component={Link} to="/revolution" className={classes.learnButton} onClick={() => props.setValue(2)}>
                                    <span style={{ marginRight: 5 }}>
                                        Learn More
                                    </span>
                                    <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button variant="contained" component={Link} to="/estimate" className={classes.estimateButton} onClick={() => props.setValue(false)}>Free Estimate</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}