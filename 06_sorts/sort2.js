  
/**
 * 归并排序
 *
 */
const mergeSort = (arr) => {
    // 当任意数组分解到只有一个时返回。
    if (arr.length <= 1) return arr

    const middle = Math.floor(arr.length/2)
    const leftArr = arr.slice(0 ,middle)
    const rightArr = arr.slice(middle)

    return mergeArr(mergeSort(leftArr), mergeSort(rightArr))
}

const mergeArr = (left, right) => {
    let temp = []
    let leftIndex = 0
    let rigthIndex = 0

    // 判断2个数组中元素大小，依次插入数组
    while(left.length > leftIndex && right.length > rigthIndex) { // 判断是否一个数组排序结束
        if(left[leftIndex] <= right[rigthIndex]) {
            temp.push(left[left])
            leftIndex ++
        } else {
            temp.push(right[rigthIndex])
            rigthIndex ++ 
        }
    }

    // 合并 多余数组
    // 其中一个必然为空，剩下的都是大数
    return temp.concat(left.slice[leftIndex]).concat(right.slice(rigthIndex))
}

const testArr = []
let i = 0
while (i < 100) {
    testArr.push(Math.floor(Math.random() * 1000))
    i++
}

const res = mergeSort(testArr)
console.log(res)

/**
 * 快速排序
 *
 */
const quickSort = (arr, left, right) => {
    if(left < right) {
        let pivot = right
        let partitionIndex = partition(arr, pivot, left, right)
        quickSort(arr, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
        quickSort(arr, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
    }
}

// 获取 pivot 交换完后的index
const partition = (arr, pivot, left, right) => {
    const pivotVal = arr[pivot]
    let startIndex = left
    for (let i = left; i < right; i++) {
        if (arr[i] < pivotVal) {
            swap(arr, i, startIndex)
            startIndex++ // startIndex与j同时移动 startIndex始终指向一个大于pivot的数
        }
    }
    swap(arr, startIndex, pivot)
    return startIndex
}

const swap = (arr, i, j) => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const testArr2 = []
let i2 = 0
while (i2 < 10) {
    testArr2.push(Math.floor(Math.random() * 1000))
    i2++
}
console.log('unsort', testArr2)
quickSort(testArr2, 0, testArr2.length - 1);
console.log('sort', testArr2)


/**
 * 第k大的数
 * @param {array} arr 
 * @param {number} k  
 */

const KthNum = (arr, k) => {
    const length = arr.length
    if(k > length) {
        return -1
    }

    let p = KthPartition(arr, 0, length-1)
    
    while(p+1 !== k) {
        if(p+1>k){
            p = KthPartition(arr, 0, p-1)
        }else{
            p = KthPartition(arr, p, length-1)
        }
    }

    return arr[p]

}

const KthPartition = (arr, left, right) => {
    let startIndex = left
    let pivot = arr[right]

    for(let j = left; j < right; j++) {
        if(arr[j] < pivot) {
            Kthswap(arr, startIndex, j);
            startIndex++ 
        }
    }
    Kthswap(arr, startIndex, right)
    return startIndex
}

const Kthswap = (arr, i, j) => {
    if (i === j) return
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}
console.log(testArr2)
console.log(KthNum(testArr2, 3))