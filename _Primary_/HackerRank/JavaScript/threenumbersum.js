function threeNumberSum(arr, target) {
    // const ht = {}
    const result = []
    let j = 1
    let k = 2
    
    arr.forEach(num => {
        while(j < arr.length-1){
            if(num + arr[j] + arr[k] === target){
                result.push[sum_nums = [num, arr[j], arr[k]]]
                j=1
                k=2
                return result
            }
            else {
                test = [num, arr[j], arr[k]]
                console.log(`TEST1: ${test}`)
                while(k < arr.length){
                    if(num + arr[j] + arr[k] === target){
                        result.push[sum_nums = [num, arr[j], arr[k]]]
                        j=1
                        k=2
                        return result
                    }
                    else {
                        test = [num, arr[j], arr[k]]
                        console.log(`TEST2: ${test}`)
                        j++
                    }
                k++
                } 
            }
        continue    
        } 
    });
    console.log(`RESULTS: ${result}`)
    return result
}
    

sample_arr = [12, 3, 1, 2, -6, 5, -8, 6]
threeNumberSum(sample_arr, 0)





/*
  arr.map((num, i) => {
        let sum_array =[]
        if(ht[num] !== undefined){
            if(ht.num < target){
                
            }

            console.log("DOH")
            return 
        }
        else{
            ht.num = num
            console.log(`ht[${num}] is index: ${ht.num}`)
        }
        // console.log(ht.num)
        return
    })
    return
*/