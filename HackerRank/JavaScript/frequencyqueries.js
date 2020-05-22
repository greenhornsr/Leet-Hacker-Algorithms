
//  flatten attempt...
function frequencyQueries0(queries) {
    // 1 = insert x 
    // 2 = delete y
    // 3 = check count of z; true = 1; else false.  return output
    const flattened = arr => [].concat(...arr);
    const flatresult = flattened(queries)
    let collection = {}
    for(const q in flatresult) {
        let currval = flatresult[q]
        // let nextval = flatresult[Number(q)+1]
        if(q % 2 !== 0) {
            console.log("continue")
            continue
        }
        if(currval === 1) {
            collection[q+1] ? collection[q+1] = 1 : collection[q+1] += 1
        }
        else if(currval === 2){
            let currel = flatresult.indexOf(flatresult[Number(q)+1])
            if(currel > -1) {
                flatresult.splice(currel,1)
                console.log("new flat array: ", flatresult)
            } 
        }
        else if(currval === 3) {

        }
    }
}

// Nested For Loop!
function frequencyQueries(queries) {
    let collection = {};
    let results = [];
    // option 2
    for(const [idx,q] of Object.entries(queries)) {
        // console.log("idx", idx)
        if(q[0] === 1) {
            // 1 = insert x 
            !collection[q[1]] ? collection[q[1]] = 1 : collection[q[1]] += 1
        }
        else if(q[0] === 2) {
            // 2 = delete y
            collection[q[1]] > 0 ? collection[q[1]] -= 1 : false
        }
        else if(q[0] === 3) {
            let myresult=0;
            for(const el in collection){
                if(collection[el] === q[1]) {
                    myresult = 1
                    break
                }
            }
            results.push(myresult)
        }
    }
    console.log("SOLVED?", results)
    return results
}

// Only 1 For LOOP!
function frequencyQueries2(queries) {
    let collection = {};
    let results = [];
    let frequency = {}
    for(const [idx,q] of Object.entries(queries)) {
        // console.log("idx", idx)
        if(q[0] === 1) {
            // 1 = insert x 
            !collection[q[1]] ? collection[q[1]] = 1 : collection[q[1]] += 1
            frequency[collection[q[1]]] = [q[1]]
        }
        else if(q[0] === 2) {
            // 2 = delete y
            collection[q[1]] > 0 ? collection[q[1]] -= 1 : false
        }
        else if(q[0] === 3) {
            let myresult = 0;
            if(frequency[q[1]]){
                myresult = 1
            }
        results.push(myresult)
        }
    }
    console.log("SOLVED?", results)
    return results
}

// TESTS
// frequencyQueries([[1,5],[1,6],[3,2],[1,10],[1,10],[1,6],[2,5],[3,2]])
// frequencyQueries2([[1,1],[3,3],[2,2],[3,-1],[1,1],[1,1],[2,1],[1,2],[3,2]])
// frequencyQueries([[1,100021],[3,3],[1,100043],[1,100062],[1,100089],[1,100007],[2,3],[3,4],[3,3],[3,4],[2,5],[1,100092],[3,5],[2,1],[3,1],[1,100091],[1,100053],[1,100044],[2,2],[3,3],[1,100063],[1,100068],[2,3],[1,100084],[2,2],[1,100004],[2,1],[3,5],[2,5],[3,3],[1,100077],[1,100080],[3,1],[1,100020],[1,100093],[3,1],[2,3],[3,2],[3,4],[2,5],[2,5],[2,5],[3,2],[3,4],[3,5],[2,2],[3,2],[3,2],[1,100056],[3,3],[2,4],[1,100070],[3,5],[3,3],[3,3],[3,1],[1,100038],[1,100026],[2,5],[3,2],[1,100043],[2,2],[3,3],[1,100080],[1,100073],[2,2],[1,100005],[2,5],[1,100078],[1,100085],[1,100070],[1,100077],[2,1],[3,3],[3,3],[1,100056],[3,1],[3,4],[3,4],[3,1],[3,1],[2,5],[1,100021],[3,1],[2,2],[3,5],[2,3],[3,2],[1,100050]])
// frequencyQueries2([[1,100021],[3,3],[1,100043],[1,100062],[1,100089],[1,100007],[2,3],[3,4],[3,3],[3,4],[2,5],[1,100092],[3,5],[2,1],[3,1],[1,100091],[1,100053],[1,100044],[2,2],[3,3],[1,100063],[1,100068],[2,3],[1,100084],[2,2],[1,100004],[2,1],[3,5],[2,5],[3,3],[1,100077],[1,100080],[3,1],[1,100020],[1,100093],[3,1],[2,3],[3,2],[3,4],[2,5],[2,5],[2,5],[3,2],[3,4],[3,5],[2,2],[3,2],[3,2],[1,100056],[3,3],[2,4],[1,100070],[3,5],[3,3],[3,3],[3,1],[1,100038],[1,100026],[2,5],[3,2],[1,100043],[2,2],[3,3],[1,100080],[1,100073],[2,2],[1,100005],[2,5],[1,100078],[1,100085],[1,100070],[1,100077],[2,1],[3,3],[3,3],[1,100056],[3,1],[3,4],[3,4],[3,1],[3,1],[2,5],[1,100021],[3,1],[2,2],[3,5],[2,3],[3,2],[1,100050]])
// [0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1]
// [0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1]


