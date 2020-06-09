/**
 * 二分查找
 */

// 数组必须有序 不存在重复

function binaryFind(arr, target) {
    if(arr.length === 0) return -1
    // 下标
    let low = 0
    let high = arr.length - 1

    while(low <= high) {
        const mid = Math.floor((high + low) / 2)
        if(arr[mid] === target) {
            return mid
        } else if(arr[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}

const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
console.log(binaryFind(arr, 44))
console.log(binaryFind(arr, 1))
console.log(binaryFind(arr, 102))
console.log(binaryFind(arr, 1111))