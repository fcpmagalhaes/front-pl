
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import Head from 'next/head';

import TopBar from './TopBar';
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.dark,
    display: 'flex',
    height: '100hv',
    overflow: 'hidden',
    width: '100vw',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256,
    },
  },
  noPaddingLeft: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 0,
    },
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}))

function Layout({ children, title }) {
  const classes = useStyles();
  const [openNav, setOpenNav] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if(router.pathname === '/infografico') {
      setOpenNav(false);
    }
  }, [])

  return (
    <>
      <Head> 
        <title>{title}</title>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.root}>
        <TopBar setOpenNav={setOpenNav} openNav={openNav} />
        <NavBar openNav={openNav}/>
        <div className={clsx(classes.wrapper, !openNav && classes.noPaddingLeft)}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout;