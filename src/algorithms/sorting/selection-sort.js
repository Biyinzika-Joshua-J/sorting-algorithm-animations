import { timer } from "../utilities.js";

export function selectionSort(list, animations = []) {
  for (let i = 0; i < list.length; i++) {
    let animation = { checks: [], swap: [] };
    let min_index = i;
    for (let j = i + 1; j < list.length; j++) {
      animation.checks.push(j);
      if (list[min_index] > list[j]) {
        min_index = j;
      }
    }
    animation.swap = [min_index, i];
    [list[min_index], list[i]] = [list[i], list[min_index]];
    animations.push(animation);
  }
  return animations;
}

export async function selectionSortAnimator(animations) {
  let bars = document.querySelectorAll(".column");
  for (let i = 0; i < animations.length; i++) {
    const { checks, swap } = animations[i];
    for (let j = 0; j < checks.length; j++) {
       bars[checks[j]].style.backgroundColor = 'red';
       await timer(1);
       bars[checks[j]].style.backgroundColor = 'blue';
    }
    //swap
    let temp = bars[swap[0]].style.height;
    bars[swap[0]].style.height = bars[swap[1]].style.height;
    bars[swap[1]].style.height = temp;
  }
}
