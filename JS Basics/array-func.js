arr = [1,2,3,4,5,6,7,8,9,10]

// for (let i=0; i<arr.length; i++) {
//     let el = arr[i]
//     console.log(el) 
// }


const newMapedArray = arr.map(function(element) {
    console.log(element);
    return element ** 2
})


console.log(arr, newMapedArray)










