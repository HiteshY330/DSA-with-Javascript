function sumOfAllNaturalNum(n){
    // let sum = 0;
    // for(let i =0; i<=n; i++){
    //     console.log(i)
    //     sum =  sum + i
    // }
    // return sum;
    if(n==0){
        return 0;
    }
    // console.log(n)
    return  n + sumOfAllNaturalNum(n-1)
}

console.log(sumOfAllNaturalNum(100))