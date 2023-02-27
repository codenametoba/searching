function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
      var key = arr[i];
      var p = i - 1;
      while (p >= 0 && arr[p] > key) {
        arr[p + 1] = arr[p];
        p--;
      }
      arr[p + 1] = key;
    }
    return arr;
  }

  var arr = [16, 24, 4, 12, 22, 2, 10];
  console.log("Sorted array is:", insertionSort(arr));

