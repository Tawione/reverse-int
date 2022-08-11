module.exports = function reverse (n) {
    let arr = [n];
    return arr.toString().split('').reverse().slice(0,3).join('');
}
