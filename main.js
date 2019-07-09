function isStartSmallerThanEnd(start,end) {
    return start <= end;
}

function isInRangeOf1to1000(start, end) {
    if (start <= 1000 && start >= 1 && end <= 1000 && end >= 1) {
        return true;
    }
    else return false;
}

function createMultiplyEquation(x, y) {
    return x + "*" + y + "=" + x * y;
}

function createMultiplicationTable(start, end) {
    var table = "";
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= i; j++) {
            let s = createMultiplyEquation(j, i);
            if (start === j) {
                table += s;
            }
            else {
                table = table + " " + s;
            }
        }
        if (i != end) {
            table += '\n';
        }
    }
    return table;
}

function getMultiplicationTable(start,end) {
    if (!isStartSmallerThanEnd(start,end)) {
        return null;
    }
    if (!isInRangeOf1to1000(start,end)) {
        return null;
    }
    else return createMultiplicationTable(start,end);
}

module.exports = [isStartSmallerThanEnd,isInRangeOf1to1000, createMultiplyEquation, createMultiplicationTable,getMultiplicationTable];