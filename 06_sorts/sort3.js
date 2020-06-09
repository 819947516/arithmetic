// 桶排序（Bucket sort）思路：
// 将数组中的数据，按桶进行划分，将相邻的数据划分在同一个桶中
// 每个桶用插入排序算法（或者快速排序）进行排序
// 最后整合每个桶中的数据

function buckerSort(arr, bucketSize = 5) {
    if(arr.length < 2) {
        return arr
    }

    const buckers = createBuckers(arr, bucketSize)
    return sortBuckets(buckets)
}

function createBuckers(arr, bucketSize) {
    // 1遍历数组，找到数组最小值与数组最大值
    // 2根据最小值、最大值、桶的大小，计算得到桶的个数
    // 3建立一个二维数组，将桶放入buckets中
    // 4计算每一个值应该放在哪一个桶中

    // 1
    let minValue = arr[0]
    let maxValue = arr[0]

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < minValue) {
            minValue = arr[i]
        } else if (arr > maxValue) {
            maxValue = arr[i]
        }
    }

    // 2
    const bucketsCount = Math.floor((maxValue - minValue) / bucketSize) + 1

    // 3
    const buckets = []
    for (let i = 0; i < bucketsCount; i++) {
        buckets[i] = []
    }

    // 4
    for (let i = 0; i < array.length; i++) {
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
        buckets[bucketIndex].push(array[i])
    }
    return buckets
}

function sortBuckets(buckets) {
    const sortedArray = []
    for(let i = 0; i < buckets.length; i++) {
        if(buckets[i] != null) {
            insertionSort(buckets[i])
            sortedArray.push(...buckets[i])
        }
    }
    return sortedArray
}

// 插入排序
function insertionSort(arr) {
    if(arr.length <= 1) return 
    for(let i=1; i<arr.length; i++) {
        const temp = arr[i]
        let j = i - 1
        // j代表有序区间的下标   ---- 移动
        for(j; j>=0; j--){
            if(temp < arr[j]) {
                arr[j+1] = arr[j]
            } else {
                break
            }
        }
        arr[j + 1] = temp  // 插入数据
    }
}



// 计数排序（Counting sort）
// 当要排序的 n 个数据，所处的范围并不大的时候，比如最大值是 k，我们就可以把数据划分成 k 个桶。每个桶内的数据值都是相同的，省掉了桶内排序的时间。

function countingSort(arr) {
    if(arr.length <= 1) return
    const max = findMaxValue(arr)
    const counts = new Array(max + 1)

    // 计算每个元素的个数，放入到counts桶中
    // counts下标是元素，值是元素个数
    arr.forEach(element => {
        if(!counts[element]) {
            counts[element] = 0
        }
        counts[element] ++ 
    })

    // counts下标是元素，值是元素个数
    // 例如： array: [6, 4, 3, 1], counts: [empty, 1, empty, 1, 1, empty, 1]
    // i是元素, count是元素个数

    let sortedIndex = 0
    counts.forEach((count, i) => {
        while (count > 0) {
            array[sortedIndex] = i
            sortedIndex++
            count--
        }
    })
    return array
}

function findMaxValue(array) {
    let max = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}