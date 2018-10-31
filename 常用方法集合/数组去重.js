//去除数据中重复数据
export function removeSameItem(arr) {
    return Array.from(new Set(arr))
}