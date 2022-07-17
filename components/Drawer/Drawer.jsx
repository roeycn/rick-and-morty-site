import React, {useState} from "react";
import { makeStyles } from '@material-ui/core'
import {styled} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import {DrawerItems} from "./items";
// import {useLocation} from "react-router-dom";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// import Footer from "../Footer/FooterContainer";
import Container from '@mui/material/Container';
//import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";

const drawerWidthOpened = 240;
const drawerWidthClosed = 24;

const useStyles = makeStyles((theme) => {
    return {
        page: {
            background: 'lightgrey',
            backgroundSize : 'cover',
            width: '100%',
            minHeight: '90vh',
            // height: '90vh',
            paddingLeft: drawerWidthClosed,
            display: 'inline-block',
            paddingTop: '100px',
            paddingBottom: '500px',
        },
        root: {
            display: 'flex',
        },
        toolbar: theme.mixins.toolbar,
        avatar: {
            marginLeft: theme.spacing(2)
        },
        footer: {
            position: "fixed",
            bottom: 0,
            textAlign: "center",
            paddingBottom: 10,
            left: "30%",
            display: 'inline-block',
        }
    }
})

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidthOpened,
        width: `calc(100% - ${drawerWidthOpened}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerStyled = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'absolute',
            whiteSpace: 'nowrap',
            width: drawerWidthOpened,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

function isAuthRoute(pathname) {
    return pathname === "/" ||
           pathname === "/login" ||
           pathname === "/blog" ||
           pathname === "/dashboard";
}

function Drawer({ children }) {
    const classes = useStyles()

    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        //setOpen(true)
        // should check how to handle ui when closed
          setOpen(!open);
    };

    // DONT DISPLAY IN CASE OF LOGIN AND MORE
    // const location = useLocation();
    //
    // if (isAuthRoute(location.pathname)) {
    //     return null;
    // }

    return (
          <div className={classes.root}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    open={open}
                    elevation={0}>

                    <Toolbar
                        sx={{
                            pr: drawerWidthClosed, // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && {display: 'none'}),
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{flexGrow: 1}}
                        >
                            App1.0
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <DrawerStyled
                    variant="permanent"
                    open={open}
                 //   PaperProps={{ style: { height: "90vh" } }}
                >

                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    <List component="nav">
                        <DrawerItems/>
                    </List>
                    <Divider/>
                </DrawerStyled>

                {/*<Box  component="main"*/}
                {/*      sx={{*/}
                {/*          backgroundColor: (theme) =>*/}
                {/*              theme.palette.mode === 'light'*/}
                {/*                  ? theme.palette.grey[100]*/}
                {/*                  : theme.palette.grey[900],*/}
                {/*          flexGrow: 1,*/}
                {/*          height: '100vh',*/}
                {/*          overflow: 'auto',*/}
                {/*      }}>*/}
                {/*</Box>*/}
                {/*<Toolbar />*/}

            </Box>

              <Container maxWidth="lg">
                  <main className={classes.page}>
                      {children}
                  </main>
              </Container>
              {/*<Box >*/}
              {/*    <div className={classes.footer}>*/}
              {/*        <Footer />*/}
              {/*    </div>*/}
              {/*</Box>*/}

        </div>
    )
}

export {Drawer}