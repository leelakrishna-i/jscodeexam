function findMaximumNumOf1s(mat){
    let max_ind=0
    let mat_ind=0
    let max_1s=0
    for (let i of mat){
        let sum=0
        for(let j of i){
            sum+=j
        }if(sum>max_1s){
            max_1s=sum
            max_ind=mat_ind
        }
        mat_ind+=1    
    }
         
    console.log(max_ind)
}

let mat=[[0, 1, 1, 1],
[0, 0, 1, 1 ],
[1, 1, 1, 1  ],
[0, 0, 0, 0 ],
]

findMaximumNumOf1s(mat)