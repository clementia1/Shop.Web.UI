import React, { useState, useEffect } from 'react';
import { useAuth } from 'oidc-react';
import UserMenuContent from '../components/UserMenuContent';
import UserMenuButton from '../components/UserMenuButton';

function UserMenu() {
    const auth = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <UserMenuButton handleClick={handleClick} userData={auth.userData}/>
            <UserMenuContent anchorEl={anchorEl} handleClose={handleClose} signOut={auth.signOutRedirect}/>
        </>
    )
}

export default UserMenu;