/**
 * 冒泡，插入，选择排序
 *
 */
// 冒泡
const bubbleSort = (arr) => {
    if(arr.length <= 1) return 
    for(let i = 0; i<arr.length; i++) {
        let flag = false
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
                flag = true
            }
        }
        if(!flag) break
    }
    console.log(arr)
}

// 插入
const insertionSort = (arr) => {
    if(arr.length <= 1) return 
    for(let i=1; i<arr.length; i++) {
        const temp = arr[i]
        let j = i - 1
        // j代表有序区间的下标
        for(j; j>=0; j--){
            if(temp < arr[j]) {
                arr[j+1] = arr[j]
            } else {
                break
            }
        }
        arr[j + 1] = temp
    }
    console.log(arr)
}

// 选择排序
const selectionSort = (arr) => {
    if (arr.length <= 1) return
    // 需要注意这里的边界, 因为需要在内层进行 i+1后的循环，所以外层需要 数组长度-1
    for(let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        // j 为未排序区间下标
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        // 和最小的交换位置
        const temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    console.log(arr)
}

//test
const test = [4, 5, 6, 3, 2, 1]

bubbleSort(test)

const testSort = [4, 1, 6, 3, 2, 1]

insertionSort(testSort)

const testSelect = [4, 8, 6, 3, 2, 1, 0, 12]

selectionSort(testSelect)