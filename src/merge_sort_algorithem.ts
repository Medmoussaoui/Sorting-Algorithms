////////////////         MERGE SORT ALGORITHEM           ////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


function merge(listOne: number[], listTwo: number[]): number[] {
    console.log('Merge Start');
    let one = 0;
    let two = 0;
    let sortedList = [];
    while (one < (listOne.length) && two < (listTwo.length)) {

        if (listOne[one] > listTwo[two]) {
            sortedList.push(listTwo[two]);
            two++;
        }
        else {
            sortedList.push(listOne[one]);
            one++;
        }
    }

    if (one < (listOne.length)) {
        return sortedList.concat(listOne.slice(one));
    }

    else if (two < (listTwo.length)) {
        return sortedList.concat(listTwo.slice(two));
    }
    return sortedList;
}

function mergeSort(listItems: any[]) {
    if (listItems.length <= 1) return listItems;
    let middleIndex = Math.round(listItems.length / 2);
    let rightList = mergeSort(listItems.slice(0, middleIndex));
    let leftList = mergeSort(listItems.slice(middleIndex));
    return merge(rightList, leftList);
}


const sort = mergeSort([4, 8, 5, 9, 10, 3, 2, 1]);
console.log('---> Sort List Using [ Merge Sort ]');
console.log(sort);



