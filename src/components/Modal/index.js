import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Creators } from '../../store/infographic/actions';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Ontology from '../Ontology';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);


export default function Modal() {

  const { openModal, loading } = useSelector((state) => {
    return state.infographic;
  });

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    dispatch(Creators.setModal({openModal: !openModal}));
  }

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  return (
    <div>
     
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}  fullWidth={true} maxWidth={true}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
        <Ontology />
      </Dialog>
    </div>
  );
}