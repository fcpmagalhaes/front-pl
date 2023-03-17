import { useRouter } from 'next/router';
import {
  makeStyles,
  Hidden,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@material-ui/core';

import HomeOutlined from '@material-ui/icons/HomeOutlined';
import EqualizerOutlined from '@material-ui/icons/EqualizerOutlined';
import AccountTreeOutlined from '@material-ui/icons/AccountTreeOutlined';
import AssignmentOutlined from '@material-ui/icons/AssignmentOutlined';
import StorageOutlined from '@material-ui/icons/StorageOutlined';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 240,
  },
  desktopDrawer: {
    width: 240,
    top: 56,
    height: 'calc(100% - 64px)',
    borderRight: 'none',
  },
  avatar: {
    cursor: 'pointer',
    width: 24,
    height: 24,
  },
  listItem: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: theme.spacing(3),
  },
  listItemText: {
    fontSize: 14,
  },
}));

const primaryMenu = [
  { id: 1, label: 'Início', path: '/', icon: HomeOutlined },
  {
    id: 2,
    label: 'Gerador de Gráfico',
    path: '/grafico',
    icon: EqualizerOutlined,
  },
];

const secondaryManu = [
  {
    id: 1,
    label: 'Dicionário de Dados',
    path: 'dicionario',
    icon: AccountTreeOutlined,
  },
  {
    id: 2,
    label: 'Censo da Educação Superior',
    path: '/em-construcao',
    icon: AssignmentOutlined,
  },
  {
    id: 3,
    label: 'Dados Abertos',
    path: '/em-construcao',
    icon: StorageOutlined,
  },
  { id: 4, label: 'Sobre', path: '/em-construcao', icon: InfoOutlined },
];

function NavBar({ openNav }) {
  const classes = useStyles();
  const router = useRouter();

  const isSelected = (item) => router.pathname === item.path;

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <ListItem
        button
        classes={{ root: classes.listItem }}
        onClick={() => router.back()}
      >
        <ListItemIcon>
          <ArrowBack />
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.listItemText,
          }}
          primary="Voltar"
        />
      </ListItem>

      <Divider />

      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
              onClick={() => router.push(item.path)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#1A5FC8' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {secondaryManu.map((item) => {
          const Icon = item.icon;
          return (
            <ListItem
              key={item.id}
              button
              classes={{ root: classes.listItem }}
              selected={isSelected(item)}
              onClick={() => router.push(item.path)}
            >
              <ListItemIcon>
                <Icon style={{ color: isSelected(item) && '#1A5FC8' }} />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={item.label}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Hidden mdDown>
      <Drawer
        anchor="left"
        classes={{ paper: classes.desktopDrawer }}
        open={openNav}
        variant="persistent"
      >
        {content}
      </Drawer>
    </Hidden>
  );
}

export default NavBar;
