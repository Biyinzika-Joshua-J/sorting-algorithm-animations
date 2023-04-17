import React from "react";
import { Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateNumberOfBars, updateBarsAreSorted } from "../../features/barsSlice";
import { generateNewArray } from "../../features/barsSlice";
const BarsSlider = () => {
    const barsNum = useSelector(state => state.bars.bars)
    const isSliderDisabled = useSelector(state => state.sorter.isSorting)
  const dispatch = useDispatch();
  function UpdateBarsHandler(e) {
    const numberOfBars = e.target.value;
    dispatch(updateNumberOfBars({type:'updateBarNumber', data:numberOfBars}))
    dispatch(generateNewArray(10, 200, barsNum))
    dispatch(updateBarsAreSorted({type:'barsAreSorted', barsAreSorted:false}))
  }
  return (
    <>
      <Slider
        onChange={UpdateBarsHandler}
        defaultValue={200}
        min={10}
        max={200}
        aria-label="Default"
        valueLabelDisplay="auto"
        disabled={isSliderDisabled}
      />
    </>
  );
};

export default BarsSlider;
