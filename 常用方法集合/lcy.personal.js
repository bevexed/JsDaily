//用已有数组制作二维数组
function sortByEach(all) {
    let arr = []
    let arr2 = []
    all.forEach(c => {
        if (arr2.length === 8) {
            arr2 = []
        }
        if (arr2.length === 0) {
            arr.push(arr2)
        }
        arr2.push(c)
    })
    return arr
}
