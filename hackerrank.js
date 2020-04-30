//Compare 2 arrays
function compareTriplets(a, b) {
    let result = [];
    function compareArrays(a, b) {
        return a.reduce((res, val, i) => {
            return val > b[i] ? res + 1 : res + 0;
        }, 0);
    }
    result.push(compareArrays(a, b), compareArrays(b, a));
    return(result);
}

const ax = [3,4,1]; const bx= [1,2,1];
console.log(compareTriplets(ax,bx));

//Matrix diagonl sum
function diagonalDifference(arr) {
    let leftTopDiagSum = 0;
    let leftBottomDiagSum = 0;
    for(let i = 0; i< arr.length; i++) {
        for(let j=0; j<arr[i].length; j++) {
            if(i === j) {
                leftTopDiagSum = leftTopDiagSum+arr[i][j];
            }
            if(i === arr[i].length-j-1) {
                leftBottomDiagSum = leftBottomDiagSum+arr[i][j]
            }
        }
    }
    return Math.abs(leftTopDiagSum - leftBottomDiagSum);
}

const arra = [[1,2,3], [2,2,2], [2,2,2]];
console.log(diagonalDifference(arra));

//print nnumber of positive, negative and zero numbers
function plusMinus(arr) {
    let negatives = 0;
    let positives = 0;
    let zeros = 0;
    arr.forEach(el => {
        if(el < 0) negatives++;
        if(el>0) positives++;
        if(el===0) zeros++;
    });
    function printRes(numberType) {
        console.log(numberType/arr.length);
    }
    printRes(positives);
    printRes(negatives);
    printRes(zeros);
}
const myArr = [-1, -1, 0, 0, 1, 1, 2, 1]
plusMinus(myArr);

//Stairs matrix
function staircase(n) {
    for(let i =0; i < n; i++) {
        let row = '';
        let counter = 0;
        while(counter<n){
            if(i >= n-counter-1) row = row+"#";
            else row = row+" ";
            counter++;
        }
        console.log(row);
    }
}

staircase(4);

function steps(n, row=0, string=''){
    if(row===n) return;
    if(string.length === n) {
        console.log(string);
        return steps(n, row=row+1)
    }
    const add = string.length < n-row-1 ? 'x' : '#';
    steps(n, row, string =string+add);
}

steps(10)

//Print out the min and max sum of 4 of 5 numbers
function miniMaxSum(arr) {
    const sortedArr = arr.sort();
    const minValue = sortedArr[0];
    const maxValue = sortedArr[arr.length-1];
    let sumWithoutExtremePoints = 0;
    for(let i = 1; i < sortedArr.length - 1; i++) {
        sumWithoutExtremePoints += sortedArr[i];
    }
    console.log(`${sumWithoutExtremePoints+minValue} ${sumWithoutExtremePoints+maxValue}`);
}

miniMaxSum([1, 2, 3, 4, 5])

//return number of max elements in arr
function birthdayCakeCandles(ar) {
    const max = Math.max(...ar);
    return ar.filter(el => el === max).length;
}

console.log(birthdayCakeCandles([1,1,1,1]));

//convert time to 24h
function timeConversion(s) {
    //00:05:45PM
    //19:05:45
    const pm = s.slice(8,10) === 'PM';
    const hours = s.slice(0,2);
    let adjustedHours = hours;
    if(pm && parseInt(hours) < 12) adjustedHours = parseInt(hours) + 12;
    if(pm && parseInt(hours) === 12) adjustedHours = 12;
    if(!pm && parseInt(hours) === 12) adjustedHours = '00';
    
    console.log(`${adjustedHours}:${s.slice(3,5)}:${s.slice(6,8)}`);
}

timeConversion('12:05:45PM');


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let fruits = [0, 0];
    apples.forEach(el => {
        if(el + a >= s && el + a <= t) fruits[0]++;
    });
    oranges.forEach(el => {
        if(b + el <= t && el + b >= s) fruits[1]++ 
    });

    console.log(fruits[0]);
    console.log(fruits[1]);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])