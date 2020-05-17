function makeAnagrams(a, b) {
    let hta = {}
    // helper func
    function longerStringFirst(longstr, shortstr){
        let deltracker = 0
        for(const ela of longstr){
            if(!hta[ela]){
                hta[ela] = 1
                deltracker += 1 
            }
            else {
                hta[ela] += 1;
                deltracker += 1;
            };
        };
        for(const elb of shortstr){
            if(!hta[elb]){
                // hta[elb] = 1
                deltracker += 1
            }
            else if(hta[elb] > 0){
                hta[elb] -= 1
                deltracker -= 1 
            };
        };
        return deltracker;
    }
    
    deletions = a.length >= b.length ? longerStringFirst(a, b) : longerStringFirst(b, a)
    console.log(`deletions:`, deletions)
    return deletions;
}

// COMPLETED, PASSES!  
// TEST
// let a = 'fcrxzwscanmligyxyvym'  
// let b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'
let a = 'abc'  
let b = 'cde'
makeAnagrams(a, b)
