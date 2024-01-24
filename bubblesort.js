// Create an array of unordered data
// const data = [12, 45, 196, 18, 500, 11, 122, 20, 30, 100];
const data = [12, 45, 196, 18, 500];
// Create a selection sorting algorithm function
const bubbleSort = (data) => {
    const length = data.length;
    let attempt = 0;
    // Create swap function
    const swap = (data, left, right) => {
        ([data[left], data[right]] = [data[right], data[left]]);
    }

    // Looping for selecting element to be compared
    for (let index = 0; index < length; index ++){  
        // Looping for each candidate minimum element to be compared with
        for(let cIndex = 0; cIndex < length - 1 - index; cIndex ++){
            attempt ++;
            // Conditional test if the left(max) value is greater than the right(min)
            if(data[cIndex] > data[cIndex + 1]){
                swap(data, cIndex, cIndex + 1);
            }
        }
    }
    
    console.log(data);
    console.log(`Done in ${attempt} attempt(s)`);
}

console.log(bubbleSort(data));