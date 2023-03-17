import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Button, makeStyles } from '@material-ui/core';

import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  navigationButton: {
    paddingLeft: '30px',
    paddingRight: '30px',
  },
}));

export default function Home() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Layout title="Consulta Microdados INEP">
      <Box mx={4} my={2}>
        <Grid container>
          <Grid item md={7} xs={12} style={{ padding: 20 }}>
            <h1>Gerador de Gráfico</h1>
            <Typography variant="body2">
              O Gerador de Gráfico é uma ferramenta possibilita a produção semi
              automática de gráficos para Jornalismo de Dados, usando dados do
              Censo de Educação Superior.
            </Typography>
            <Typography variant="body2">
              Seu objetivo é auxiliar jornalistas e a sociedade civil a extrair
              novas informações dos microdados do censo de 2018 a 2019
              referentes aos alunos universitários do Distrito Federal.
            </Typography>
          </Grid>
          <Grid item md={5} xs={12}>
            <img
              src="chart-home.png"
              alt="Imagem gráfico"
              className={classes.img}
            />
          </Grid>
          <Grid container justifyContent="flex-end" style={{ padding: 20 }}>
            <Button
              color="primary"
              component="a"
              variant="contained"
              onClick={() => router.push('/infografico')}
              classes={{ root: classes.navigationButton }}
            >
              Iniciar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
