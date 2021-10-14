import Layout from '../../components/Layout';
import { IconButton, Box, makeStyles, Grid } from '@material-ui/core';

import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
const useStyles = makeStyles((theme) => ({
  toolbox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 'calc(100vw - 60px)',
    marginBottom: '10px',
  },
  button: {
    marginLeft: '10px',
    width: '2em',
  }
}));

export default function Infograficos() {
  const classes = useStyles();

  return (
    <Layout title='Consulta Microdados INEP'>
      <Box mx={4} my={2}>
        <h1>Infograficos</h1>
      </Box>
   
    </Layout>
  )
}
