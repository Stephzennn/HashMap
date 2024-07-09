import "./style.css";

function fibs(n = 8) {
  let ar = [];
  if (n >= 1) {
    ar.push(0);
  } else if (n < 1) {
    return [];
  }
  for (let g = 1; g < n; g++) {
    if (ar.length >= 2) {
      ar.push(ar[ar.length - 1] + ar[ar.length - 2]);
    } else {
      ar.push(g);
    }
  }
  return ar;
}

function fibsRec(num) {
  if (num <= 2) {
    return [0, 1];
  }
  let x = fibsRec(num - 1);

  x.push(x[x.length - 1] + x[x.length - 2]);
  return x;
}

function mergeSort(arr) {
  if (arr.length <= 2) {
    let narr = sorted(arr);

    return narr;
  }
  let p = 0;

  p = arr.length / 2;
  p = parseInt(p);
  let g = p;

  let x = mergeSort(arr.slice(0, p));
  let y = mergeSort(arr.slice(g));

  let f = combine(x, y);

  return f;
}

function combine(arr1, arr2) {
  let narr = [];
  let len;
  let len2;
  if (arr1.length >= arr2) {
    len = arr1.length;
    len2 = arr2.length;
  } else {
    len = arr2.length;
    len2 = arr1.length;
  }

  let count1 = 0;
  let count2 = 0;
  let c = 0;
  while (true) {
    c = c + 1;
    if (arr1.length == 0 || arr2.length == 0) {
      narr = narr.concat(arr1);
      narr = narr.concat(arr2);
      break;
    }

    if (arr1[0] < arr2[0]) {
      narr.push(arr1[0]);
      arr1.splice(0, 1);
    } else {
      narr.push(arr2[0]);
      arr2.splice(0, 1);
    }
  }
  return narr;
}

let dr = [2, 5, 7, 3, 2, 1, 23432, 23, 11, 2, 56, 5, 1, 9, 56, 34, 23];
let g = [1, 4, 6, 8, 9];
let gg = dr.concat(g);

dr = mergeSort(dr);

function sorted(arr) {
  let narr = [];
  if (arr.length == 2) {
    if (arr[0] > arr[1]) {
      narr.push(arr[1]);
      narr.push(arr[0]);
    } else {
      narr.push(arr[0]);
      narr.push(arr[1]);
    }
  } else {
    return arr;
  }
  return narr;
}
