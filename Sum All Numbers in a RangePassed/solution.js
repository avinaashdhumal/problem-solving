function sumAll(arr) {
    // create block level variable with 'let' keyword and give an initial value 0
    let sum = 0
    // If the first value of array is greater than the second value 
    if (arr[0] > arr[1]) {
        // create a range between first value to the last value using for loop
        for (let i = arr[1]; i <= arr[0]; i++) {
            // sum all the numbers between the range
            sum += i
        }
    }
    // if second value is greater than the first value of the array
    else {
        for (let i = arr[0]; i <= arr[1]; i++) {
            sum += i
        }
    }
    // finally return the sum all the numbers
    return sum
}

console.log(sumAll([1, 4]));