/* 
Installed npm packages: jquery underscore request express
jade shelljs passport http sys lodash async mocha chai sinon
sinon-chai moment connect validator restify ejs ws co when
helmet wrench brain mustache should backbone forever debug jsdom
*/

// You are given an image with pixels that are white(1) or black(0), 
// in an array of arrays. 

// Write a function that takes in the image 
// and finds the coordinates of the rectangle of 0s. The rectangle
// is always aligned horizontally & vertically (i.e. not at an angle), 
// and there always is at least one rectangle.

// TODO: 
// extra credit: find with multiple rectangles

const original = [
    [1, 1, 1, 1, 1, 1, 1], // x
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1]
];


const image1 = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];

const image2 = [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1]
];

function findRightBottomX(image, leftCoords) {


    for (var x = leftCoords.x; x < image[leftCoords.y].length; x++) {

        if (image[leftCoords.y][x] === 1) {
            return x - 1;
        }

    }

    return image[leftCoords.y].length - 1;


}

function findRightBottomY(image, leftCoords) {
    // increment down each row until we don't see a 0
    for (var y = leftCoords.y; y < image.length; y++) {

        if (image[y][leftCoords.x] === 1) {
            return y - 1;
        }

    }

    return image.length - 1;

}




function findLeftCoord(image) {

    for (var y = 0; y < image.length; y++) { // y

        for (var x = 0; x < image[y].length; x++) {

            if (image[y][x] === 0) {

                return { x: x, y: y };

            }


        }

    }

    return null;

}


function findRightCoord(image, leftCoords) {

    const rightBottomX = findRightBottomX(image, leftCoords);

    const rightBottomY = findRightBottomY(image, leftCoords);

    return { x: rightBottomX, y: rightBottomY };

}


function findRectangle(image) {

    const coords = [];

    coords[0] = findLeftCoord(image);

    coords[1] = findRightCoord(image, coords[0]);

    return coords;

}

//

// console.log("coordinates:", findRectangle(original));
// console.log("coordinates:", findRectangle(image1));
