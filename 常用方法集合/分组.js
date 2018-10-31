function ate() {
    let arr = []
    let arr2 = []
    this.shopCateListData.forEach(c => {
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
