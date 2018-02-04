/**
 * Find how many consecutive sums equal the given number.
 * I: number
 * O: number of possible conesecutive sums.
 * @param {number} num 
 */

function consecutive(num) {
    if (typeof num !== 'number' || num <= 2) {
        return 0;
    }

    var currentStart = 1;
    var solutions = 0;

    /**
    * Helper to find solution or end program if integers are too large
    * @param {number} start
    * @return {bool or string}
    */
    function findSolution(start) {

        var total = 0;

        for (var i = start; i < num; i++) {
            var newSum = total + i;

            // base case:
            // if total is already greater than num and we only added two integers
            if (total > num && i <= start + 2) {
                // flag to end program and return solutions
                return 'end';
            }

            if (newSum < num) {
                // add to total, continue loop
                total = newSum;
            } else if (newSum > num) {
                // exit loop and function
                return false;
            } else if (newSum === num) {
                // exit loop and function
                return true;
            }

        }
    }

    while (currentStart < num) {

        var hasSolution = findSolution(currentStart);

        if (hasSolution === 'end') {
            return solutions;
        } else if (hasSolution === true) {
            solutions++;
        }

        currentStart++;
    }

    return solutions;
}

// consecutive(15); // 3
// consecutive(10); // 1
// consecutive(250); // 3
// consecutive(-1); // 0?
// consecutive(3.5); // 0?