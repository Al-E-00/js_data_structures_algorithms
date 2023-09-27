function findMissingNumber(arr) {
    if(!arr) return undefined;

    if(arr.length === 0) return 1;


    for(let i = 1; i <= arr.length; i++) {
        if(!arr.includes(i)) {
            return i
        }
    }
}

module.exports = findMissingNumber;
