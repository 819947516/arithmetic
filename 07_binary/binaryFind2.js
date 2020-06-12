  
/**
 * 二分查找变式
 * 数组有序
 */

// 变体一：查找第一个值等于给定值的元素
function biaryFindFirst(sortedArr, target) {
    if(sortedArr.length === 0) return -1
    let low = 0
    let high = sortedArr.length -1 

    while(low <= high) {
        const mid = Math.floor((high + low)/2)
        if (sortedArr[mid] > target) {
            high = mid - 1
        } else if(sortedArr[mid] < target) {
            low = mid + 1
        } else {
            if(mid === 0 || sortedArr[mid-1] !== target) {
                return mid
            } 
            high = mid - 1
        }
    }
    return -1
}

// 变体二：查找最后一个值等于给定值的元素
function biaryFindLast(sortedArr, target) {
    if(sortedArr.length === 0) return -1
    let low = 0
    let high = sortedArr.length -1

    while(low <= high) {
        const mid = Math.floor((high + low)/2)
        if(sortedArr[mid] > target) {
            high = mid - 1
        } else if(sortedArr[mid] < target) {
            low = mid + 1
        } else {
            if(mid === sortedArr.length - 1  || sortedArr[mid+1] > target) {
                return mid
            } else {
                low = mid + 1
            }
        }

    }
    return -1
}
// 变体三：查找第一个大于等于给定值的元素
function biaryFindFistBig(sortedArr, target) {
    if(sortedArr.length === 0) return -1
    let low = 0
    let high = sortedArr.length -1 

    while(low <= high) {
        const mid = Math.floor((high + low)/2)
        if (sortedArr[mid] >= target) {
            if(mid === 0 || sortedArr[mid-1] < target) {
                return mid
            }
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}
// 变体四：查找最后一个小于等于给定值的元素
function biaryFindLastSmall(sortedArr, target) {
    if(sortedArr.length === 0) return -1
    let low = 0
    let high = sortedArr.length -1

    while(low <= high) {
        const mid = Math.floor((high + low)/2)
        if(sortedArr[mid] <= target) {
            if(mid === sortedArr.length - 1 || sortedArr[mid+1] > target) {
                return mid
            }
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}

const arr = [1, 2, 3, 4, 4, 4, 4, 4, 6, 7, 8, 8, 9]
const first = biaryFindFirst(arr, 4)
console.log(`FindFirst: ${first}`)
const last = biaryFindLast(arr, 4)
console.log(`FindLast: ${last}`)
const FisrtBig = biaryFindFistBig(arr, 5)
console.log(`FindFisrtBig: ${FisrtBig}`)
const LastSmall = biaryFindLastSmall(arr, 4)
console.log(`FindLastSmall: ${LastSmall}`)