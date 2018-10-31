/*
Given a list of reviews, sort them by how far their length is from the average length of all reviews.
The closer a review length is from the average review length, the higher it should be sorted.
Conversely, the further a review length is from the average review length, the lower it should be sorted.
*/
//  ['10 chrctrs', 'It has 20 characters', "It's 25 unique characters", 'This believable review has 50 different characters']

/*
[
'It has 20 characters',
"It's 25 unique characters",
'This believable review has 50 different characters',
'10 chrctrs'
]
*/

// input : array

// output: array

/*
list.sort((a, b) => {
    if (a < b) {
     return 1;   
    }
    return a - b;
})
*/

const reviews = ['10 chrctrs', 'It has 20 characters', "It's 25 unique characters", 'This believable review has 50 different characters'];

const getAvgReviewLen = (list) => {
    let lengthSum = 0; // 105 
    // sum of length divided by num of reviews
    // gather avg length
    list.forEach((review) => {
        lengthSum += review.length;
    });
    
    const avgLen = lengthSum / list.length; // 26.25
    
    return avgLen;
};

const avgReviewLength = getAvgReviewLen(reviews); // 26.25

const sortReviews = (reviewsList, avgLen) => {
   
    // sort by length
    reviewsList.sort((review1, review2) => {
         
        // diff from avg len
        const review1Diff = Math.abs(avgLen - review1.length); // 10 - 26 -> 16.25
        const review2Diff = Math.abs(review2.length - avgLen); // 20 - 26 -> 6
        // check if negative
        console.log(review1Diff);
        if (review1Diff < review2Diff) {
            return -1;
        }
        
        if (review1Diff > review2Diff) {
            return 1;
        }
        
        return 0;
        
    });
    
    return reviewsList;
    
};

// console.log(sortReviews(reviews, avgReviewLength));

// ---------
// depth first recursive problem
// ----------

// Input:[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
// Output: [20,24]
// Explanation: 
// List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
// List 2: [0, 9, 12, 20], 20 is in range [20,24].
// List 3: [5, 18, 22, 30], 22 is in range [20,24].

// range- largest - lowest 

/*
[4,10,15,24,26] - 24
[0,9,12,20] - 20
[5,18,22,30] - 22

[0, 30] : 30 - 0 = 30

[20,24] small : 24 - 20 = 4
[24, 26] small: 26 - 24 = 2

index: 0
[4,10,15,24,26]
[0,9,12,20]
[5,18,22,30]
*/

const findRange = (list) => {
  let range = [];
  
  // loop through subArray
  list.forEach((subArray, index) => { // index: 0
    console.log('subArray:', subArray);
    let currentLowestIndex = 2; // 2
    // last element
    let highest = subArray[subArray.length-1]; // 26
    let lowest = subArray[subArray.length-currentLowestIndex];
    
    console.log('highest:', highest);
    console.log('lowest:', lowest);
    
    for (let n = index+1; n < list.length; n++) {
      console.log('el ref:', list[n][list[n].length-1]);
      if (lowest > list[n][list[n].length-1]) {
        // reset the lowest to be the next highest number in first array
        currentLowestIndex++;
        highest = lowest;
        lowest = subArray[subArray.length-currentLowestIndex];
        n++;
      }
    }
    // 15, 24
    // 12, 20

    console.log('lowest after look:', lowest);
    if (!range.length) {
      range = [lowest, highest];
    } else {
      // TODO
      // find range
      // const currentRange = range[1] - range[0];
      // const newRange = highest - lowest; 

      // if (lowest < range[1] && lowest > range[0]) {
      //   range[1] = lowest;
      // } else if (lowest > range[0] && lowest < range[1]) {
      //   range[0] = lowest;
      // }
      
      // if (highest < range[1] && highest > range[0]){

      // } else if {

      // }
      
    }

    console.log('current range:', range);
    console.log('diff:', range[1] - range[0]);
    
  });
  
  return range;

};

console.log(findRange([[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]));
