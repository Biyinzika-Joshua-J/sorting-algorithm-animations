import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import "./NavbarInput.css";
import { useDispatch, useSelector } from "react-redux";
import { generateNewArray, updateBarsAreSorted } from "../../features/barsSlice";
import { updateSortingFuction } from "../../features/sortingSlice";
import { updateSortBtnPressed, updateIsSorting } from "../../features/sortingSlice";
import { bubbleSort } from "../../algorithms";

const NavbarInput = () => {
  const [sortingAlgorithm, setAortingAlgorithm] = useState("Select algorithm");
  const bars = useSelector((state) => state.bars.bars);
  const isDisabledButton = useSelector(state => state.sorter.isSorting);
  const barsAreAlreadySorted = useSelector(state => state.bars.barsAreSorted);
  const dispatch = useDispatch();


  const hanldeChangeOfSortingAlgorithm = (e) => {
    const sortingFunction = e.target.value;
    setAortingAlgorithm(e.target.value);
    dispatch(
      updateSortingFuction({
        type: "function-update",
        function: sortingFunction,
      })
    );
  };

  function sort() {
    if (barsAreAlreadySorted){
      alert('The array is already sorted, try generating a new one!');
      return; 
    }
    if (sortingAlgorithm != "Select algorithm"){
      dispatch(
        updateSortBtnPressed({ type: "sort-btn-pressed", pressed: true })
      );
      dispatch(updateIsSorting({type:'isSorting', isSorting:true}))
    }else{
      console.log('please select a sorting algorithm to continue')
    }
  }

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth color="info">
          <InputLabel sx={{ color: "#fff" }} id="demo-simple-select-label">
            Sort
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortingAlgorithm}
            label="function"
            onChange={hanldeChangeOfSortingAlgorithm}
            sx={{ color: "#A5D7E8" }}
          >
            <MenuItem value={"bubble-sort"}>Bubble sort</MenuItem>
            <MenuItem value={"selection-sort"}>Selection sort</MenuItem>
            <MenuItem value={"insertion-sort"}>Insertion sort</MenuItem>
            <MenuItem value={"merge-sort"}>Merge sort</MenuItem>
            <MenuItem value={"quick-sort"}>Quick sort</MenuItem>
            <MenuItem sx={{ display: "none" }} value={"Select algorithm"}>
              Select algorithm
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button
        onClick={() => {
          dispatch(generateNewArray(10, 300, bars));
          dispatch(updateBarsAreSorted({type:'barsAreSorted', barsAreSorted:false}))
        }}
        variant="contained"
        color="info"
        disabled={isDisabledButton}
      >
        Generate array
      </Button>

      <Button
        onClick={() => {
        
          sort();
        }}
        variant="contained"
        disabled={isDisabledButton}
        color="info"
        
       sx={{}}
      >
        Sort
      </Button>
    </>
  );
};

export default NavbarInput;
