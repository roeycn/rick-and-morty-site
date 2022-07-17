import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import GoogleIcon from '@mui/icons-material/Google';
// import {useNavigate} from "react-router-dom";
import Link from 'next/link';
import {useRouter} from "next/router";


function DrawerItems() {

    // const navigate = useNavigate();
    const router = useRouter();

    const toHome = () => {
        // navigate("/home", { state: { id: 1 } });
    };

    const toKeeper = (e) => {
        // navigate("/keeper", { state: { id: 1 } });
        // e.preventDefault();
        router.push(`/google`);
    };

    const toInfo = () => {
        // navigate("/info", { state: { id: 1 } });
    };

    return (
        <React.Fragment>
            <ListItemButton onClick={() => toHome()}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton onClick={() => toKeeper()}>
                <ListItemIcon>
                    <GoogleIcon />
                </ListItemIcon>
                <ListItemText primary="Index" />
            </ListItemButton>

            {/*<Link href={"/google"} >*/}
            {/*    <ListItemIcon>*/}
            {/*        <GoogleIcon />*/}
            {/*    </ListItemIcon>*/}
            {/*    <ListItemText primary="Index" />*/}
            {/*</Link>*/}

            <ListItemButton onClick={() => toInfo()}>
                <ListItemIcon>
                    <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Info" />
            </ListItemButton>
        </React.Fragment>
    )
}

export {DrawerItems}

