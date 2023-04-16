import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../features/themeSlice";


function ToggleColorButton() {
    const mode = useSelector(state => state.theme.mode);
    const dispatch = useDispatch();
    function toggleColorMode(){
      if (mode === 'dark'){
        dispatch(changeTheme({type:'change-theme', data:'light'}));
      }else{
        dispatch(changeTheme({type:'change-theme', data:'dark'}));
      }
    }

  return (
  
      <IconButton
        onClick={toggleColorMode}
        color="inherit"
        sx={{ ml: 1, position:'fixed', top:'80vh', left:'93vw'}}
      >
        {mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
  );
}

export default ToggleColorButton;