import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
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
  },
}));

export default function Ontology() {
  const classes = useStyles();

  return (
    <Box mx={4} my={2}>
      <h1>Dicionário de Dados do Projeto</h1>
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={100}
        defaultPositionY={200}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <Box className={classes.toolbox}>
              <IconButton
                className={classes.button}
                color="primary"
                variant="outlined"
                onClick={() => zoomIn()}
              >
                <ZoomInIcon />
              </IconButton>
              <IconButton
                className={classes.button}
                color="primary"
                variant="contained"
                onClick={() => zoomOut()}
              >
                <ZoomOutIcon />
              </IconButton>
              <IconButton
                className={classes.button}
                color="primary"
                variant="contained"
                onClick={() => resetTransform()}
              >
                <ZoomOutMapIcon />
              </IconButton>
            </Box>
            <Grid container justifyContent="center" style={{ padding: 20 }}>
              <TransformComponent>
                <img src="ontologia.jpeg" style={{ maxWidth: '130vh' }} />
              </TransformComponent>
            </Grid>
          </>
        )}
      </TransformWrapper>
    </Box>
  );
}
