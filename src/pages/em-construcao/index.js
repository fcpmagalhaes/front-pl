import { Box, makeStyles } from '@material-ui/core';
import Layout from '../../components/Layout';

const useStyles = makeStyles((theme) => ({
  toolbox: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 'calc(100vw - 60px)',
    marginBottom: '10px',
  },
  button: {
    marginLeft: '10px',
    width: '2em',
  },
}));

export default function EmConstrucao() {
  const classes = useStyles();

  return (
    <Layout
      title="Consulta Microdados INEP"
      classes={{ root: classes.toolbox }}
    >
      <Box mx={4} my={2}>
        <h1>Página em Construção</h1>
      </Box>
    </Layout>
  );
}
