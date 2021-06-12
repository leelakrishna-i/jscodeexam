function findMajorityElement(arr, n)
{
    let max = 0;
    let ind = -1; 
    
    for(let i = 0; i < n; i++)
    {
        let count = 0;
        for(let j = 0; j < n; j++)
        {
            if (arr[i] == arr[j])
                count++;
        }
 
        if (count > max)
        {
            max = count;
            ind = i;
        }
    }
 
    if (max > n / 2)
        console.log(arr[ind]);
    else
        console.log("No Majority Element");
}
 
let arr = [ 3, 3, 4, 2, 4, 4, 2, 4, 4 ];
let n = arr.length;

//let arr=[3, 3, 4, 2, 4, 4, 2, 4]
//let n = arr.length;
 
findMajorityElement(arr, n);