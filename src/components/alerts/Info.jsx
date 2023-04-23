import React, {useState, useEffect} from "react";
import { Alert, AlertTitle, Collapse } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectSortingAlgorithmError } from "../../features/errorSlice";

const Info = ({textPrimary, textSecondary}) => {
    const dispatch = useDispatch();
    const open = useSelector(state => state.error.selectSortingAlgorithmError);
    
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
            dispatch(selectSortingAlgorithmError({type:'sorting-error', data:false}))
        }, 6000)
    }, [open])

  return (
   <Collapse in={open} sx={{width:'auto', position:'absolute', top:'70%', ...errorStylesState}}>
         <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
      {textPrimary} — <strong>{textSecondary}!</strong>
    </Alert>
   </Collapse>
  );
};

export default Info;
