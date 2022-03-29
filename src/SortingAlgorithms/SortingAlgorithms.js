export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return [animations, array];
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, animations);
    return [animations, array];
}

  function swap(arr, i, j, animations) {
    animations.push([i, j]);
    animations.push([i, j]);
    animations.push([i, arr[j]]);
    animations.push([j, arr[i]]);
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function partition(arr, low, high, animations) {
  
    // pivot
    let pivot = arr[high];
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {

        // If current element is smaller
        // than the pivot
        if (arr[j] < pivot) {

            // Increment index of
            // smaller element
            i++;
            
            swap(arr, i, j, animations);
        }
    }
    swap(arr, i + 1, high, animations);
    return (i + 1);
  }

  function quickSortHelper(mainArray, low, high, animations) {
    if (low < high) {
      let pi = partition(mainArray, low, high, animations);
      quickSortHelper(mainArray, low, pi - 1, animations);
      quickSortHelper(mainArray, pi + 1, high, animations);
    }
  }

export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  var n = array.length;
  for (var i = Math.floor(n / 2) - 1; i >= 0; i--) 
    heapify(array,n, i, animations);
  for (var i = n - 1; i > 0; i--) {
    swap(array,0, i, animations);
    heapify(array, i, 0, animations);
  }
  return [animations, array];
}

  function heapify(arr, n, i, animations) {
    var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
 
        // If left child is larger than root
        if (l < n && arr[l] > arr[largest])
            largest = l;
 
        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest])
            largest = r;
 
        // If largest is not root
        if (largest != i) {
            swap(arr, i, largest, animations);
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest, animations);
        }
  }

export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  var n = array.length;
  var i, j;
  for (i = 0; i < n-1; i++)
  {
      for (j = 0; j < n-i-1; j++)
      {
          if (array[j] > array[j+1])
          {
          swap(array,j,j+1,animations);    
          }
      }
  }
  return [animations, array];
}
