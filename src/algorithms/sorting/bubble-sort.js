import {timer} from '../../utilities/timer';

export function bubbleSort(list, animations) {
    for (let i = 0; i < list.length; i++) {
      for (let j = 1; j < list.length - i; j++) {
        let animation = {};
        animation.comparison = [j, j - 1];
        if (list[j] < list[j - 1]) {
          animation.swap = [j, j - 1];
          [list[j], list[j - 1]] = [list[j - 1], list[j]];
        }
        animations.push(animation);
      }
    }
    return animations;
  }
  

export async function bubbleSortAnimator(animations, bars, color) {

    for (let i = 0; i < animations.length; i++) {
      let { comparison, swap } = animations[i];
  
        bars[comparison[0]].style.backgroundColor = "red";
        bars[comparison[1]].style.backgroundColor = "red";
        await timer(5)    
        bars[comparison[0]].style.backgroundColor = color;
        bars[comparison[1]].style.backgroundColor = color;
    
        await timer(0)
       
          if (swap) {
            
            bars[comparison[0]].style.backgroundColor = color;
            bars[comparison[1]].style.backgroundColor = color;
            // swap
            let temp = bars[comparison[0]].style.height;
            bars[comparison[0]].style.height =  `${bars[comparison[1]].style.height}`;
            bars[comparison[1]].style.height = `${temp}`;
         

          }
       
 
    }
   
  }
  
   function bubbleSortHelper(list, bars, color){
    let sortingAnimations = bubbleSort(list, []);
    bubbleSortAnimator(sortingAnimations, bars, color);

  }

  export default  bubbleSortHelper;