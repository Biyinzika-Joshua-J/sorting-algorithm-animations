import { width } from "@mui/system";
import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SortingApi } from "../../algorithms";
import { updateBarsToSortedOrder, updateBarsAreSorted } from "../../features/barsSlice";
import { updateSortBtnPressed, updateIsSorting } from "../../features/sortingSlice";


const Bars = () => {
  const bars = useSelector((state) => state.bars.array);
  const sortingFunction = useSelector(state => state.sorter.function);
  const sortBtnPressed = useSelector(state => state.sorter.sort);
  const barColumns = useRef(null);
  const [sortedArray, setSortedArray] = useState([]);
  const theme = useSelector(state => state.theme.mode)

  const dispatch = useDispatch();

  const barColor = {
    'chill':'#B0A4A4',
    'breeze':'#E5BEEC',
    'light':'blue',
    'dark':'#A5D7E8',
  }

 useEffect( ()=>{
     if (sortBtnPressed){
         setSortedArray(SortingApi(sortingFunction, [...bars], barColumns.current.children, barColor[theme]));
         dispatch(updateSortBtnPressed({type:'sort-btn-pressed', pressed:false}))

        }
  }, [sortBtnPressed])

  useEffect(() => {
    const interval = setInterval(()=>{
      let array =[];
      for (let i=0; i<barColumns.current.children.length; i++){
        array[i] = barColumns.current.children[i].style.height;
      }
      array = array.map((height)=>{
          return parseInt(height.substr(0, height.length-2))
      })
      let compareArray = [...array]
      array = array.sort((a,b) => a-b);
      if (compareArray.toString() === array.toString()){
        dispatch(updateIsSorting({type:'isSorting', isSorting:false}))
        dispatch(updateBarsAreSorted({type:'barsAreSorted', barsAreSorted:true}))
        clearInterval(interval)
      }
    }, 1000)
  }, [sortBtnPressed])
  
 
  return (
    <>
      <div
        ref={barColumns}
        style={{ display: "flex", justifyContent: "center",  }}
      >
        {bars.map((height, index) => (
          <div
            className="bar"
            key={index}
            style={{
              height: `${height}px`,
              width: "15px",
              
              marginRight: "3px",
              transition:'all .0s' 
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Bars;
