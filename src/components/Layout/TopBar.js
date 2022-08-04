import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { Creators } from '../../store/infographic/actions';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import MenuIcon from '@material-ui/icons/Menu';
import VideoCall from '@material-ui/icons/VideoCall';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountTreeOutlined from '@material-ui/icons/AccountTreeOutlined';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 45,
    marginLeft: theme.spacing(3),
  },
  input: {
    flex: 1,
  },
}));

function TopBar({setOpenNav, openNav}) {
  const classes = useStyles();
  const session = false;
  const router = useRouter();

  const { openModal, loading } = useSelector((state) => {
    return state.infographic;
  });

  const dispatch = useDispatch();


  const handleDrawer = () => {
    setOpenNav(!openNav);
  };

  const handleClickOpen = () => {
    dispatch(Creators.setModal({openModal: !openModal}));
  };


  return (
    <AppBar className={classes.root} color="default">
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <img
            src='/cic-logo.png'
            alt="logo cic"
            className={classes.logo}
          />
        </Box>
        
        <Box display="flex">
          <Button
            component="button"
            variant="outlined"
            startIcon={<AccountTreeOutlined />}
            onClick={handleClickOpen}
          >
            Ontologia
          </Button>
          <IconButton className={classes.icons}>
            <MoreVert />
          </IconButton>
          {!session ? (
            <Button
              color="secondary"
              component="a"
              variant="outlined"
              startIcon={<AccountCircle />}
              // onClick={() => signIn('google')}
            >
              Login
            </Button>
          ) : (
            <Box display="flex" alignItems="center">
              <Avatar
                // onClick={() => signOut()}
                alt="User"
                className={classes.avatar}
                // src={session?.user?.image}
              />
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;