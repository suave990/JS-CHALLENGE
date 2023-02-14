const checkPrime=(num)=>{
    if (num<=1)
        return false
    
    if(num<=3)
        return true
    
    if(num%2==0||num%3==0)
        return false
    
    for (let index=5;index<=num/2;index++){
        if(num%index==0)
        return false
    }
    return true
}
//console.log(checkPrime(13))
const arrPrime=[1,7,12,13,0]
const storePrime=[]
for(let index=0;index<=arrPrime.length-1;index++){
    if(checkPrime(arrPrime[index])){
        storePrime.push(arrPrime[index])

    }
}
console.log(storePrime)