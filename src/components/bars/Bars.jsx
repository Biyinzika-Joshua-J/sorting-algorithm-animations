import { width } from "@mui/system";
import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SortingApi } from "../../algorithms";
import { updateBarsToSortedOrder } from "../../features/barsSlice";
import { updateSortBtnPressed } from "../../features/sortingSlice";


const Bars = () => {
  const bars = useSelector((state) => state.bars.array);
  const sortingFunction = useSelector(state => state.sorter.function);
  const sortBtnPressed = useSelector(state => state.sorter.sort);
  const barColumns = useRef(null);
  const [sortedArray, setSortedArray] = useState([]);

  const dispatch = useDispatch();

  

 useEffect( ()=>{
     if (sortBtnPressed){
         setSortedArray(SortingApi(sortingFunction, [...bars], barColumns.current.children));
         dispatch(updateSortBtnPressed({type:'sort-btn-pressed', pressed:false}))

        }
      
    
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
              backgroundColor: "blue",
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
