export default (arr, fn, out = []) => {
    for (let i = 0; i < arr.length; i++){
        out[i] = fn(arr[i], i, arr);
    }
    return out;
};
