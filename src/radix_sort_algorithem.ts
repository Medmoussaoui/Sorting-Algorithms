////////////////         RADIX SORT ALGORITHEM           ////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////


function digitCount(items: number[]): number {
    let maxDigit = 0;
    items.forEach((i) => {
        const i_digits = i.toString().length
        maxDigit = Math.max(i_digits, maxDigit);
    });
    return maxDigit;
}

function indexOfPacket(num: number, digit: number): number {
    const stringNumber = num.toString();
    const index = stringNumber[stringNumber.length - digit] ?? 0;
    return parseInt(index);
}

function toSingleList(packets: any[]): number[] {
    const singleList: number[] = [];
    packets.forEach(packet => singleList.push(...packet));
    return singleList.slice();
}

export function radixSort(items: number[]) {
    const mostDigit = digitCount(items);
    for (let digit = 1; digit <= mostDigit; digit++) {
        let packets: number[][] = [[], [], [], [], [], [], [], [], [], []];
        for (let count = 0; count < items.length; count++) {
            const packetIndex = indexOfPacket(items[count], digit);
            packets[packetIndex].push(items[count]);
        }
        items = toSingleList(packets);
    }
    return items;
}

console.log("--> Sort Using [ Radix Sort Algorithem ]");
console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
const listItems = [9, 7, 15, 5, 18, 4, 12, 1];

console.log("* After Sort : " + listItems.toString()); // Input

const result = radixSort(listItems); // Radix Sort Function()

console.log("* Befor Sort : " + result.toString()); // Output