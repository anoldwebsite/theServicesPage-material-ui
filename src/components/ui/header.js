import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { StepConnector, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({//using hook useScrollTrigger from @material-ui/core
        disableHysteresis: true, //Defaults to false. Disable the hysteresis. Ignore the scroll direction when determining the trigger value.
        threshold: 0, //0 means trigger the event listener as soon as the user starts scrolling.
        //Default to 100 which means scrolling further down before the even listener triggers. It controls how far the user has to start scrolling to trigger the effect. 
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0  //0 means flat i.e. elevation of zero. 4 means elevation of 4 to show the floating state.
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5em"
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": { //Removes the opacity from the button with the logo image.
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,//background color of the menu
        color: "white", //text color of the menu items in the menu.
        borderRadius: 0
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawerIconContainer: {
        marginLeft: "auto",
        //A round circle around the icon appears when hovering if the backgroundColor is not transparent.
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerItemSelected: {
        opacity: 1
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1 //Accessing the zIndex of the modal component, which is under the component drawer. We add 1 to that so that the drawer remains above the modal component.
    }
}));

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const ios = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down("md"));//down with "md" means the screen size is medium and below.

    const [openDrawer, setOpenDrawer] = useState(false);
    //const [value, setValue] = useState(0);
    const { value, setValue, selectedIndex, setSelectedIndex } = props;//The Header components is getting props from App component in moudle App.js
    const [anchorElement, setAnchorElement] = useState(null);//The menu for services e.g., will be anchored on the services tab in the AppBar.
    const [openMenu, setOpenMenu] = useState(false); //The visibility of the menu i.e., is the menu visible now on the screen or closed.
    //const [selectedIndex, setSelectedIndex] = useState(0);//Index of the selected menu item. (Services menu)

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };
    const handleClick = (e) => {//e is the eventpassed to the function.
        setAnchorElement(e.currentTarget); //Telling the menu where to render itself.
        setOpenMenu(true); //Show the menu on the screen.
    };

    const handleMenuItemClick = (e, i) => {//e is the event and i is the index of the selected menu item.
        setAnchorElement(null);//Make the menu go away.
        setOpenMenu(false);//The menu is not open.
        setSelectedIndex(i);//Set the state to show which idex (i.e. which menu item) is selected to get the styling.
    };

    const handleClose = (e) => {
        setAnchorElement(null); //Telling the menu to unrender itself from the respective tab on the AppBar.
        setOpenMenu(false);//Hide the menu on the screen.
    };

    const menuOptions = [
        { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 }, //activeIndex: index of the active tab in the AppBar. selectedIndex: Inside the services menu at index 0 is choice Services
        { name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1 }, //activeIndex: index of the active tab in the AppBar. selectedIndex: Inside the services menu at index 1 is choice Custom Software Development
        { name: "ios/Android App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 }, //activeIndex: index of the active tab in the AppBar. selectedIndex: Inside the services menu at index 2 is choice Mobile App Development
        { name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3 } //activeIndex: index of the active tab in the AppBar. selectedIndex: Inside the services menu at index 3 is choice Website Development
    ];

    const routes = [
        { name: "Home", link: "/", activeIndex: 0 }, //activeIndex: index of the active tab in the AppBar. 
        {
            name: "Services",
            link: "/services",
            activeIndex: 1,
            ariaOwns: anchorElement ? "simple-menu" : undefined,
            ariaPopup: anchorElement ? "true" : undefined,
            mouseOver: event => handleClick(event)
        }, //If the menu is closed then anchorElement will be null. Undefined means do not set the property at all.
        { name: "Revolution", link: "/revolution", activeIndex: 2 },
        { name: "About Us", link: "/about", activeIndex: 3 },
        { name: "Contact Us", link: "/contact", activeIndex: 4 }
    ];

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {//checking which tab is active in the AppBar and set the appropriate tab if it is not already set.
                        setValue(route.activeIndex);//Maintianing the correct active tab.
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex) {//Has the selected index of a service has already been set or not?
                            setSelectedIndex(route.selectedIndex); //Maintaining the correct selected service from the services menu.
                        }
                    }
                    break;
                case '/estimate':
                    setValue(false);
                    break;
                default:
                    break;
            }
        });
    }, [value, menuOptions, selectedIndex, routes]);

    const tabs = (
        <React.Fragment>
            <Tabs value={value} className={classes.tabContainer} onChange={handleChange} indicatorColor="primary">
                {
                    routes.map((route, index) => (
                        <Tab
                            key={`${route}${index}`} //Creating a unique identifier for each tab element.
                            className={classes.tab}
                            component={Link}
                            to={route.link}
                            label={route.name}
                            aria-owns={route.ariaOwns}
                            aria-haspopup={route.ariaPopup}
                            onMouseOver={route.mouseOver}
                        />
                    ))
                }
            </Tabs>
            <Button className={classes.button} disableRipple variant="contained" color="secondary" component={Link} to="/estimate" onClick={() => { setValue(5) }}>
                Free Estimate
            </Button>

            <Menu
                id="simple-menu"
                anchorEl={anchorElement}
                open={openMenu}
                onClose={handleClose}
                classes={{ paper: classes.menu }}//The underlying component handling the color of the menu is the paper component.
                MenuListProps={{ onMouseLeave: handleClose }} //The Menu component is built on top of many other components one of which is the MenuList component.
                elevation={0}
                style={{ zIndex: 1302 }}
                keepMounted //Irrespective of if the menu is visible on the screen or not, keep it mounted on the DOM for the search enging optimization.
            >
                {
                    //Map on the menuOptions to see which menu item is selected.
                    menuOptions.map((option, i) => (// Each option is an object e.g., { name: "Services", link: "/services" }; i is index of opton in the array.
                        <MenuItem
                            key={`${option}${i}`} //key is required by the map function in javascript.
                            component={Link}
                            to={option.link} //Setting the route to go to.
                            classes={{ root: classes.menuItem }}//Setting the styling of the menu item.
                            onClick={event => {
                                handleMenuItemClick(event, i);
                                setValue(1); //Highlight the Services tab which has index 1.
                                handleClose();
                            }}
                            selected={i === selectedIndex && value === 1}//Make sure that the active tab is set to the services page by checking if value === 1.
                        >
                            {option.name}
                        </MenuItem>
                    ))
                }
            </Menu>

        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!ios} //Helps optimise for mobile devices.
                disableDiscovery={ios} //Helps optimise for mobile devices.
                open={openDrawer} //Is it open or closed? Boolean.
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {
                        routes.map(route => (
                            <ListItem
                                key={`${route}${route.activeIndex}`} //Creating a unique identifier for each list item.
                                divider
                                button
                                component={Link}
                                to={route.link}
                                selected={value === route.activeIndex}
                                onClick={() => { setOpenDrawer(false); setValue(route.activeIndex) }}
                            >
                                <ListItemText
                                    className={value === route.activeIndex ? [classes.drawerItem, classes.drawerItemSelected].join(" ") : classes.drawerItem}
                                    disableTypography
                                >
                                    {route.name}
                                </ListItemText>
                            </ListItem>
                        ))
                    }
                    <ListItem className={classes.drawerItemEstimate} divider button component={Link} to={"/estimate"} selected={value === 5}
                        onClick={() => { setOpenDrawer(false); setValue(5) }}
                    >
                        <ListItemText className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected].join(" ") : classes.drawerItem} disableTypography>
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple={true}>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment >
    );

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary" className={classes.appbar}>
                    <Toolbar disableGutters={true}>
                        <Button className={classes.logoContainer} disableRipple component={Link} to="/" onClick={() => { setValue(0) }}>
                            <img alt="company logo" className={classes.logo} src={logo} />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}