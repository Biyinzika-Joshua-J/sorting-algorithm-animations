function merge(arr, beg, mid, end, maxele) {
  console.log(beg, mid);
  let i = beg;
  let j = mid + 1;
  let k = beg;
  while (i <= mid && j <= end) {
    if (arr[i] % maxele <= arr[j] % maxele) {
      arr[k] = arr[k] + (arr[i] % maxele) * maxele;
      k++;
      i++;
    } else {
      arr[k] = arr[k] + (arr[j] % maxele) * maxele;
      k++;
      j++;
    }
  }
  while (i <= mid) {
    arr[k] = arr[k] + (arr[i] % maxele) * maxele;
    k++;
    i++;
  }
  while (j <= end) {
    arr[k] = arr[k] + (arr[j] % maxele) * maxele;
    k++;
    j++;
  }

  // Obtaining actual values
  for (i = beg; i <= end; i++) {
    arr[i] = Math.floor(arr[i] / maxele);
  }
}

// Recursive merge sort
// with extra parameter, naxele
function mergeSortRec(arr, beg, end, maxele) {
  if (beg < end) {
    let mid = Math.floor((beg + end) / 2);
    mergeSortRec(arr, beg, mid, maxele);
    mergeSortRec(arr, mid + 1, end, maxele);
    merge(arr, beg, mid, end, maxele);
  }
}

// This functions finds
// max element and calls
// recursive merge sort.
function mergeSort(arr, n) {
  let maxele = Math.max(...arr) + 1;
  mergeSortRec(arr, 0, n - 1, maxele);
  return arr;
}

// Driver code
let arr = [999, 612, 589, 856, 56, 945, 243];

let arr2 = [10, 1, 2, 5, 3, 0, -1, 100];
console.log(mergeSort(arr, arr.length));
