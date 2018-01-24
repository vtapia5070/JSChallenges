// Elemenytary sorting

// iterate through list
    // for each item in the list
        // compare current item and right item
            //if current is greater than right, swap

// Can we optimize for the best case if a list is sorted or semi sorted?

var BubbleSort = (list) => {

    const swap = (indx1, indx2) => {

        const temp = list[indx1];
        list[indx1] = list[indx2];
        list[indx2] = temp;
        console.log('swaping', list[indx1], 'and', list[indx2]);

    }

    // test if we reach worst case n^2
    let iteration = 1;

    // Check if list is sorted
    let sortedCount = 0;

    for (let i = 0; i < list.length; i++) {

        for (let n = 0; n < list.length; n++) {
            
            if (list[n] > list[n+1]) {
                swap(n, n+1);
                console.log('list after swap', list);
            } else {
                sortedCount += 1;
            }

            if (sortedCount === list.length) {
                console.log('sorted after', iteration, ' iterations.');
                return list;
            } else if (n === list.length) {
                sortedCount = 0;
            }

        }

        iteration += 1;

    }
    console.log('completed after', iteration, 'iterations.');
    return list;
};

BubbleSort([2, 5, 1, 3, 4, 6]); // Should be O(log^2)
BubbleSort([1, 2, 3, 4, 5]); // should be n O(n)


// if iteration is n^2 (list.length * list.length)
    // test case for optimization fails

