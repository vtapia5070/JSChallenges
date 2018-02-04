/**
 * Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

/*
Input: 
[ Interval { start: 1, end: 3 },
  Interval { start: 2, end: 6 },
  Interval { start: 8, end: 10 },
  Interval { start: 15, end: 18 } ]
  
 Output: 
 [[1,6],[8,10],[15,18]]
*/

function hasStartOverlap(list, index, currentStart) {
    if (list[index - 1] && list[index - 1][0] > currentStart) {
        return function () {
            list[index - 1][0] = currentStart;
        }
    }
    return false;
}

function hasEndOverlap(list, index, interval) {

    if (list[index - 1] && list[index - 1][1] >= interval.start) {

        if (list[index - 1][1] <= interval.end) {

            return function () {
                list[index - 1][1] = interval.end;
            }

        } else {
            return true;
        }
    }

    return false;
}

var merge = function (intervals) {
    var intervalList = [];
    intervals.sort(function (a, b) {
        return a.start - b.start;
    });

    for (var i = 0; i < intervals.length; i++) {

        var currentStart = intervals[i].start;
        var currentEnd = intervals[i].end;
        var prevIntervalIndex = intervalList.length;

        var startOverlap = hasStartOverlap(intervalList, prevIntervalIndex, currentStart);
        var endOverlap = hasEndOverlap(intervalList, prevIntervalIndex, intervals[i]);

        if (startOverlap || endOverlap) {

            if (startOverlap) {
                startOverlap();
            }

            if (endOverlap && endOverlap !== true) {
                endOverlap();
            }

        } else if (currentStart === currentEnd && intervalList[i - 1] && currentStart < intervalList[i - 1][0]) {
            var temp = intervalList[i - 1];
            intervalList[i - 1] = [currentStart, currentEnd];
            intervalList.push(temp);
        } else {
            intervalList.push([currentStart, currentEnd]);
        }

    }

    return intervalList;

};

console.log(merge([[1,4],[0,4]]));
/**
 * Test Cases:
 * [[1,4],[0,4]] // [[0,4]]
[[1,4],[5,6]] // [[1,4], [5,6]
[[1,4],[0,1]] // [[0, 4]]
[[1,4],[0,0]] // [[0,0],[1,4]]
[[1,4],[0,2],[3,5]] // [[0, 5]]
[[2,3],[4,5],[6,7],[8,9],[1,10]] // [[1,10]]
[[2,3],[5,5],[2,2],[3,4],[3,4]] // [[2,4], [5,5]]
 * 
 */