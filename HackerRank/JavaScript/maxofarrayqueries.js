// SOURCE: https://www.hackerrank.com/test/1h9pm6gh31o/questions/5h6q4c9b9j5

function maxArrayQueries1(n, queries) {
    let newq = new Array(n+1).fill(0)

    // console.log(newq)
    for(const el of queries){
        // console.log(el[2])
        // console.log(el)
        if(el[0] === el[1]){
            newq[el[0]]+=el[2]
            // console.log(newq[el[0]])
        }
        else{
            for(let i=el[0]; i<=el[1]; i++){
                // console.log("i::", i)
                newq[i]+=el[2]
            }
        }
    }
    let result = Math.max(...newq)
    console.log(result)
    return result
}

function maxArrayQueries(n, queries) {
    let ht = {}
    let max = 0;
    for(let i=1; i<=n+1; i++){
        ht[i] = 0;
    }
    for(const [s,e,c] of queries){
        let start = s;
        let end = e
        while(start <= end){
            ht[start] += c
            ht[start] > max ? max = ht[start] : false
            start ++
        }
    }
    console.log(max)
    return max
}



// maxArrayQueries(5, [[1,2,100],[2,5,100],[3,4,100]])
// maxArrayQueries(4, [[2,3,603],[1,1,286],[4,4,882]])
maxArrayQueries(40, [[19,28,419],[4,23,680],[5,6,907],[19,33,582],[5,9,880],[10,13,438],[21,39,294],[13,18,678],[12,26,528],[15,30,261],[8,9,48],[21,23,131],[20,21,7],[13,40,65],[13,23,901],[15,15,914],[14,35,704],[20,39,522],[10,18,379],[16,27,8],[25,40,536],[5,9,190],[17,20,809],[8,20,453],[22,37,298],[19,37,112],[2,5,186],[21,29,184],[23,30,625],[2,8,960]])