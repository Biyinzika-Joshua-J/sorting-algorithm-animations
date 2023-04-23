import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue, blueGrey, indigo, grey } from '@mui/material/colors';
import CircleIcon from '@mui/icons-material/Circle';
import { changeTheme } from '../../features/themeSlice';
import { useDispatch } from 'react-redux';


const modes = [
    {
        mode:'Light mode',
        color:'#fff',
        code:'light',
    },
    {
        mode:'Dark mode',
        color:blueGrey,
        code:'dark',
    },
    {
        mode:'Chill Mode',
        color:grey,
        code:'chill',
    },
    {
        mode:'Breeze Mode',
        color:indigo,
        code:'breeze',
    },
]

const SimpleDialog = (props) => {
  const { onClose, selectedValue, open } = props;
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
    dispatch(changeTheme({type:'change-theme', data:value}));
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Change Theme</DialogTitle>
      <List sx={{ pt: 0 }}>
        {modes.map((mode, index) => (
          <ListItem disableGutters>
            <ListItemButton onClick={() => handleListItemClick(mode.code)} key={index}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: mode.color[100], color: mode.color[600] }}>
                  <CircleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={mode.mode} />
            </ListItemButton>
          </ListItem>
        ))}

      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog