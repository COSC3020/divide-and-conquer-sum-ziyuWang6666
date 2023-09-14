function divideAndConquerSum(a) {
    if(a.length===0) return 0;
    if(a.length===1) {
        return a[0];
    }
    var mid = Math.round((a.length)/3);
    var mid2 = mid * 2
    
    return divideAndConquerSum(a.slice(0,mid))+
    divideAndConquerSum(a.slice(mid,mid2))+
    divideAndConquerSum(a.slice(mid2))
}

var result = divideAndConquerSum([10,5,6,3,1,2]);
console.log(result);
// get help from TA: Ali
