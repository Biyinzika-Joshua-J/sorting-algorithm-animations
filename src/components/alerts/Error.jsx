import React, {useState, useEffect} from "react";
import { Alert, AlertTitle, Collapse } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { generatingSortedArrayError } from "../../features/errorSlice";

const Error = ({textPrimary, textSecondary}) => {
    const dispatch = useDispatch();
    const open = useSelector(state => state.error.sortingSortedArrayError);
    
    const openStyles = {
        transform:'translateX(5%)',
        transition:'all ease .2s',
    }

    const closeStyles = {
        transform:'translate(-10%)',
        transition:'all ease-out 1s',
    }

    const errorStylesState = open?openStyles:closeStyles;

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(generatingSortedArrayError({type:'sorting-error', data:false}))
        }, 9000)
    }, [open])

  return (
   <Collapse in={open} sx={{width:'auto', position:'absolute', top:'70%', ...errorStylesState}}>
         <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {textPrimary} — <strong>{textSecondary}!</strong>
    </Alert>
   </Collapse>
  );
};

export default Error;
