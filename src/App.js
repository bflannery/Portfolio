import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Router from "./router";
import { Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined';
import { NavLink} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 65;

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: '#121212',
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        backgroundColor: '#181818',
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: {
        ...theme.mixins.toolbar,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: "#0cfdd8",
        backgroundColor: 'black'
    },
    iconListContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    socialList: {
      marginBottom: '1rem'
    },
    navIcon: {
        color: "#0cfdd8",
        margin: '0.25rem 0'
    },
    content: {
        height: '100vh',
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const AppWrap = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar}>
                    <Typography variant="h4" className={classes.title}>
                        BF
                    </Typography>
                </div>
                <div className={classes.iconListContainer}>
                    <div />
                    <List className={classes.navList}>
                        <ListItem button>
                            <NavLink to={"/"}>
                                <ListItemIcon>
                                    <HomeIcon className={classes.navIcon} />
                                </ListItemIcon>
                            </NavLink>
                        </ListItem>
                        <ListItem button>
                            <NavLink to={"/about"}>
                                <ListItemIcon>
                                    <PersonIcon className={classes.navIcon} />
                                </ListItemIcon>
                            </NavLink>
                        </ListItem>
                        <ListItem button>
                            <NavLink to={"/skills"}>
                                <ListItemIcon>
                                    <SettingsIcon className={classes.navIcon} />
                                </ListItemIcon>
                            </NavLink>
                        </ListItem>
                        <ListItem button>
                            <NavLink to={"/work"}>
                                <ListItemIcon>
                                    <VisibilityIcon className={classes.navIcon} />
                                </ListItemIcon>
                            </NavLink>
                        </ListItem>
                        <ListItem button>
                            <NavLink to={"/contact"}>
                                <ListItemIcon>
                                    <MailIcon className={classes.navIcon} />
                                </ListItemIcon>
                            </NavLink>
                        </ListItem>
                    </List>
                    <List className={classes.socialList}>
                        <ListItem button>
                            <a href="https://github.com/bflannery">
                                <ListItemIcon>
                                    <GitHubIcon className={classes.navIcon}  />
                                </ListItemIcon>
                            </a>

                        </ListItem>
                        <ListItem button>
                            <a href="https://linkedin.com/in/bflanneryatx">
                                <ListItemIcon>
                                    <LinkedInIcon className={classes.navIcon} />
                                </ListItemIcon>
                            </a>
                        </ListItem>
                        <ListItem button>
                            <a href="https://twitter.com/flanst1gram">
                                <ListItemIcon>
                                    <TwitterIcon className={classes.navIcon} />
                                </ListItemIcon>
                            </a>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    );
}


function App() {
  return (
      <AppWrap>
        <Router />
      </AppWrap>
  );
}

export default App;
