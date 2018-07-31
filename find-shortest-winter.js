const list = [2, 1, 2, 4, 6, 7, 4, 2, 1, 0, 2, 5, 6];
const list1 = [2, 1, 4, 6, 7];
const list2 = [];
const list3 = [1, 1, 1, 1];
const list4 = [-1, -1, -1, -1];
const list5 = [5, 4, 3, 2, 1];
const list6 = [1, 2, 3, 4, 5];
//winter -> summer -> winter -> summer -> winter -> summer -> ...

function detectSeasonGroup(list, from, filter) {
    const result = [];
    let extreme = list[from];
    for (let i = from; i < list.length; i++) {
        if (filter(list[i], extreme)) {
            result.push(list[i]);
        } else {
            break;
        }
    }
    return result.length > 0 ? result : null;
}

function isWinter(t, maxT) {
    return t <= maxT;
}

function isSummer(t, minT) {
    return t >= minT;
}

function execute(tList) {
    const groups = [];
    const len = tList.length;
    let i = 0;
    while (i < len) {
        const winterGroup = detectSeasonGroup(tList, i, isWinter);

        if (winterGroup) {
            groups.push(winterGroup);
            i += winterGroup.length;

            const summerGroup = detectSeasonGroup(tList, i, isSummer);
            if (summerGroup) {
                i += summerGroup.length;
            }
        } else {
            break;
        }
    }

    const firstGroupLen = groups.length > 0 ? groups[0].length : 0;
    return groups.reduce((minValue, group) => group.length < minValue ? group.length : minValue, firstGroupLen);
}

console.log(execute(list));
console.log(execute(list1));
console.log(execute(list2));
console.log(execute(list3));
console.log(execute(list4));
console.log(execute(list5));
console.log(execute(list6));
