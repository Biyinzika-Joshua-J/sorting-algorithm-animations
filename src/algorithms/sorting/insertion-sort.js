import { timer } from "../utilities.js";

export function insertionSort(list, animations=[]){
    for (let i=1; i<list.length; i++){
        let animation = {keyIndex:i, comparison:[], keyChange:[], rareKeyChange:[]};
        let key = list[i],
            j = i-1;
        while (j >= 0 && list[j] > key){
            animation.comparison.push(j);
            list[j+1] = list[j];
            animation.keyChange.push([j+1, j]);
            j -= 1;
        }
        list[j + 1] = key;
        animation.rareKeyChange.push(j+1, key);
        animations.push(animation);
    }
    return animations;
}

// 1,3,2

export async function insertionSortAnimator(animations){
    let lastBar;
    let bars = document.querySelectorAll(".column");
    for (let i=0; i<animations.length; i++){
        const {keyIndex, comparison, keyChange, rareKeyChange} = animations[i];
        // start animation
        bars[keyIndex].style.backgroundColor = 'green';
        await timer(2)
        // compare
        for (let j=0; j<comparison.length; j++){
            bars[comparison[j]].style.backgroundColor = 'red';
            await timer(2);
            bars[comparison[j]].style.backgroundColor = 'blue';
            // key change
            bars[keyChange[j][0]].style.height = bars[keyChange[j][1]].style.height;
        }
        // rare key change
        bars[rareKeyChange[0]].style.height = `${rareKeyChange[1]}px`;
        lastBar=keyIndex;
    }
    bars[lastBar].style.backgroundColor = 'blue';
}