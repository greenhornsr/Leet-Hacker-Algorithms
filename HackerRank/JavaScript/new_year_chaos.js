function minimumBribes(q) {
    const start_time = new Date()
    let sum = 0;
    let end_time;

    for(let el in q){
        let originindex = q[el]-1
        let curr = q[el]
        
        if((originindex - el) > 2){
            console.log("Too chaotic")
            end_time = new Date();
            console.log(`Operation took ${(end_time.getTime() - start_time.getTime())/1000}sec`);
            return
        }
        console.log("\ncurrent val: ",curr)
        console.log("current index: ",el)
        let new_slice = q.slice(Math.max(0, curr-2), el)
        console.log("SLICE: ",new_slice, "\n")
        for(const j in q.slice(Math.max(0, curr-2), el)){
            console.log("j is: ", j)
            console.log("q of j :",q[j])
            if(new_slice[j] > curr){
                sum +=1
            } 
        }
    }  
    console.log("sum is: ", sum)
    end_time = new Date();
    console.log(`Operation took ${(end_time.getTime() - start_time.getTime())/1000}sec`);
}

// TESTS 
minimumBribes([1,2,5,3,7,8,6,4])
// minimumBribes([2,1,5,3,4])
// minimumBribes([2,5,1,3,4])

// Exploring...

12345678
12537864
//bribe 1 - 5 b 4
12354678
// bribe 2 - 5 b 3
12534678
// bribe 3 - 7 b 6
12534768
// bribe 4 - 7 b 4
12537468
// bribe 5 - 8 b 6
12537486
// bribe 6 - 8 b 4
12537846
// bribe 7 - 6 b 4
12537864
// 1,2,3,4,5,6,7,8   origin location
// 0 1 2 3 4 5 6 7   indices
//[1,2,5,3,7,8,6,4]  input array needing validated
// account for -1, -2 ?
let possibl = []
// current math
let results = [0,0,2,0,2,2,0,0]