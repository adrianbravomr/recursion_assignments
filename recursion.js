//Recursive Merge Sort Algorithm
// ----------
const mergeSort = (arr) => {
    if(!Array.isArray(arr)) return 'Not an array'
    if(arr.length<2){
        return arr;
    } else {
        let middle = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0,middle));
        let right = mergeSort(arr.slice(middle,arr.length));
        return merge(left,right);
    }
}

const merge = (a,b) => {
    if(!Array.isArray(a)||!Array.isArray(b)) return 'Not an array'
    let merged=[];
    while(a.length || b.length){
        (b[0]===undefined || a[0]<b[0]) ? 
            merged.push(a.shift()) : merged.push(b.shift())
    }
    return merged
}

console.log(mergeSort([9,4,8,6,-3,2,1,7,5,3]));
console.log(mergeSort([10, 7, 8,-5, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55])); //[10, 20, 22, 30, 33, 50, 55]

// Recursive Fibonnaci Pattern given a number n
// ----------
let fibsRec = (n) => {
    if (n===1) return [0];
    else if (n===2) return [0,1];
    else {
        let arr = fibsRec(n-1);
        arr.push(arr[n-2]+arr[n-3]);
        return arr;
    }
}

// Recursive contains, search for a specific value in a object
// ----------
let contains = (obj, val) => {
    if (typeof(obj)!='object') console.log('invalid parameters');
    for (let key in obj){
        //console.log(`looking for "${val}" in ${JSON.stringify(obj[key])}`);
        if(typeof(obj[key])=='object'){
            let objContains = contains(obj[key],val);
            if (objContains) return true;
        }
        if(obj[key]==val) return true;
    }
    return false;
}
