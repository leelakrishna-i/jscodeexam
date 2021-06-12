function findMidTriplet(arr1, arr2, arr3, n)
    {
        arr1.sort(function(a, b){return a - b});
        arr2.sort(function(a, b){return a - b});
        arr3.sort(function(a, b){return a - b});
       
        let g_min = 0
        let g_max = 0
        let g_mid = 0;
      
        let i = 0, j = 0, k = 0;
       
        let diff = 4556545987;
           
        while (i < n && j < n && k < n)
        {
            let sum = arr1[i] + arr2[j] + arr3[k];
            let max = Math.max(Math.max(arr1[i], arr2[j]), arr3[k]);
            let min = Math.min(Math.min(arr1[i], arr2[j]), arr3[k]);
            
            if (min == arr1[i])
                i++;
            else if (min == arr2[j])
                j++;
            else
                k++;
       
         
            if (diff > (max - min))
            {
                diff = max - min;
                g_max = max;
                g_mid = sum - (max + min);
                g_min = min;
            }
        }
       
        console.log(g_max + ", " + g_mid + ", " + g_min);
    }
     
    // let arr1 = [5, 2, 8];
    // let arr2 = [10, 7, 12];
    // let arr3 = [9, 14, 6];
    
    let arr1= [15, 12, 18, 9]
    let arr2= [10, 17, 13, 8] 
    let arr3 = [14, 16, 11, 5]
    let n = arr1.length;
 
    findMidTriplet(arr1, arr2, arr3, n);