function gcd( a, b){
    if (b == 0)
        return a;
    else
        return gcd(b, a % b);
}
 
function rotate(arr, d, n){

    d = d % n;
    let rotate = gcd(d, n);
    
    for (let i = 0; i < rotate; i++) {
        
        let temp = arr[i];
        let j = i;
 
        while (1) {
            let k = j + d;
            if (k >= n)
                k = k - n;
 
            if (k == i)
                break;
 
            arr[j] = arr[k];
            j = k;
        }
        arr[j] = temp;
    }
}
 
let arr = [ 1, 2, 3, 4, 5];
let n = arr.length;
let d=2

rotate(arr, d, n);
console.log(arr.join(" "))