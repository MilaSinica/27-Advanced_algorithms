// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < (arr.length -i - 1); j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const arrToSOrt = [4, 8, 1, 5,2, 7, 6, 3];
console.log(bubbleSort(arrToSOrt));

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if(indexOfMin !== i) {
            let temp = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = temp;
        }
    }
    return arr;
}
;
console.log(selectionSort(arrToSOrt));

function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }
    let arrMiddle = Math.floor(arr.length/2);
    let arrLeft = arr.slice(0, arrMiddle);
    let arrRight = arr.slice(arrMiddle);
    return  merge(mergeSort(arrLeft), mergeSort(arrRight));
}

function merge(left, right) {
    const arr = [];
    counter = 0;
    while(left.length && right.length) {
        const smallerValue =  left[0] < right [0] ? left.shift() :  right.shift();
        arr.push(smallerValue);
    }
    return [...arr, ...left, ...right];
}

const left = [4,8,2,5,1 ];
const right = [3,9,6,7,0];
console.log(merge(left, right));

const object1 = {
    name: "Mila",
    surname: "Sinica",
    mjau: {
        mjau: {
            mjau: "mjau",
            gav: "gav"
        },
        gav: "gav"
    }
}

const object2 = {
    name: "Mila",
    surname: "Sinica",
    mjau: {
        mjau: {
            mjau: "mjau",
            gav: "gav"
        },
        gav: "mjau"
    }
}

function isSameObject(obj1, obj2) {
    props1 = Object.getOwnPropertyNames(obj1); console.log(props1)
    props2 = Object.getOwnPropertyNames(obj2); console.log(props2)
    if(props1.length !== props2.length) return false;
    for(prop of props1) {
        console.log(prop)
        console.log(obj1[prop]);
        console.log(obj2[prop])
        if(typeof obj1[prop] === "object" &&  typeof obj2[prop] === "object") return isSameObject(obj1[prop], obj2[prop]);
        else if(obj1[prop] !== obj2[prop]) return false;
    }
    return true;
}

   
console.log(isSameObject(object1, object2));


module.exports = { bubbleSort, selectionSort, mergeSort, merge };
