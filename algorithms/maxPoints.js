function maxPoints(elements) {
    var points = 0;
    // key,value for element and points based on occurance.
    var numStore = {};
    // keep track of highest num key in store
    var highest = 0;

    // add nums to store
    elements.forEach(function (val) {
        if (typeof val !== 'number') {
            throw new Error('elements must be a number.');
        }
        numStore[val] = numStore[val] ? numStore[val] += val : val;
        if (numStore[val] > highest) {
            highest = val;
        }
    });

    // TODO: Is there a more optimal way to keep track of highest values?
    function findNextHighest() {
        var temp = highest;
        while (numStore[highest] === undefined) {
            highest = highest - 1;
        }
        return highest;
    }

    function deleteAndEarn() {

        if (numStore[highest] === undefined) {
            highest = findNextHighest();
        }

        // delete values in store highest+1 and highest-1
        if (numStore[highest - 1] !== undefined) {
            delete numStore[highest - 1]
        }
        if (numStore[highest + 1]) {
            delete numStore[highest + 1]
        }

        var highestPoints = numStore[highest];

        delete numStore[highest];

        return highestPoints;
    }

    while (Object.keys(numStore).length) {
        points += deleteAndEarn();
    }

    return points;
}


// maxPoints([3, 4, 2]); // 6
// maxPoints([1,2,1,3,2,3]); // 8
// maxPoints([1,1,1,2,3]); // 6
// maxPoints([null]);
