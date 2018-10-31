/**
 * Find the longest island
 */

/**
 * [
 * [1, 1, 1],
 * [1, 0, 1],
 * [1, 1, 1]
 * ] => 8
 * 
 * [
 * [1, 1, 0],
 * [1, 1, 0],
 * [1, 1, 0]
 * ] => 6
 * 
 * [
 * [1, 0, 1],
 * [1, 0, 1],
 * [0, 1, 0]
 * ] => 2
 * 
 */

function longestIsland (matrix) {
    var longest = 0;

    var count = 0;
    var isIsland = false;

    function findNeighbors (n, m) {
        // check below
        if (matrix[n+1] && matrix[n+1][m] === 1) {
            count++;
            matrix[n+1][m] = 0;
            isIsland = true;
        } else {
            
        }
    }

    for (var i = 0; i < matrix.length; i++) {
        
        // iterates left
        for (var n = 0; n < matrix[i].length; n++) {
            if (matix[i][n] === 1) {
                matrix[i][n] = 0;
                isIsland  = true;
                count++;
            } else {
                if (isIsland) {
                    findLastNeighbor(i, n-1);
                }
            }
        }

    }


}