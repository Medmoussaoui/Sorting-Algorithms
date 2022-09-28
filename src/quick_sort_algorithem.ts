////////////////         QUICK SORT ALGORITHEM           ////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


function swaping(list: any[], one: number, two: number): any {
    const storeOne = list[one];
    list[one] = list[two];
    list[two] = storeOne;
    return list;
}


function pivote(items: number[], start: number = 0, end: number = -1): number {
    if (end == -1) {
        end = items.length - 1;
    }
    let pivote = items[start];
    let count = start + 1;
    let swapCount = start;
    while (count < items.length) {
        if (pivote > items[count]) {
            swapCount++;
            swaping(items, count, swapCount);
        }
        count++;
    }
    swaping(items, swapCount, start);
    return swapCount;
}

function quicksort(items: number[], start = 0, end = -5) {
    if (end == -5) {
        end = items.length - 1;
    }

    if (start < end) {
        let pivoteIndex = pivote(items, start, end);
        quicksort(items, start, pivoteIndex - 1);
        quicksort(items, pivoteIndex + 1, end);
    }
    return items;
}


console.log("--> Sort Using [ Quick Sort Algorithem ]");
console.log("-->");
const listItems = [9, 7, 15, 5, 18, 4, 12, 1];

console.log("--> After Sort : " + listItems.toString()); // Input

const result = quicksort(listItems); // Quick Sort Function()

console.log("--> Befor Sort : " + result.toString()); // Output
