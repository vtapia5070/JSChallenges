//--- CODE --------------------------
function flatten(arr, flattened) {
    var flattened = flattened || [];

    for (var i = 0; i < arr.length; i++) {

        if (Object.isObject(arr[i])) {

            // loop through object keys
            flatten(objectValues(arr[i]), flattened);

        } else if (Array.isArray(arr[i])) {

            flatten(arr[i]);

        } else {

            flattened.push(arr[i]);

        }

    }

    return flattened;

}

function objectValues(obj) {
    return Object.values(obj);
}

Object.prototype.isObject = function (obj) {
    return typeof obj === 'object' && obj !== null;
}


// --- END CODE -----

/* var arrayToFlatten = [{1: true}, [2,3], 4];
var expectedResult = [true, 2, 3, 4]; */
var arrayToFlatten = [
    'item',
    {
        someKey: 'someValue',
        arrayKey: ['h', 'e', 'l', 'l', 'o']
    },
    undefined,
    null,
    1234,
    [5, 6, 7, 8],
    [
        ['q'],
        ['w'],
        ['e'],
        ['r'],
        ['t'],
        ['y']
    ]
];


var expectedResult = ['item', 'someValue', 'h', 'e', 'l', 'l', 'o', undefined, null, 1234, 5, 6, 7, 8, 'q', 'w', 'e', 'r', 't', 'y'];
//--- SPECS -------------------------
describe("Flatten", function () {
    it("should match expected result", function () {
        expect(flatten(arrayToFlatten)).toEqual(expectedResult);
    });
});