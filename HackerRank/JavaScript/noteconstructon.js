// SOURCE: https://www.hackerrank.com/test/1h9pm6gh31o/questions/epj7khpern7

function constructNote(magazine, note) {
    if(magazine.length !== note.length){
        console.log(false)
        return false
    }
    else{
        let mag = new Set(magazine)
        let newnote = new Set(note)

        for(const word of mag){
            if(newnote.has(word)){
                console.log(true)
                return true
            }
            else{
                console.log(false)
                return false
            }
        }
    }
}

// I BELIEVE THESE PASS...
// TESTS
constructNote(["give","me","one","grand","today","night"], ["give","one","grand","today"])
constructNote(["give","me","one","grand","today","night"], ["give","me","one","grand","today","night"])
constructNote(["Give","me","one","grand","today","night"], ["give","me","one","grand","today","night"])
constructNote(["give","me","one","grand","today","night","night"], ["give","me","one","grand","today","night","night","night"])
