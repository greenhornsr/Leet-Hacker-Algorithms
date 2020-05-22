// SOURCE: https://www.hackerrank.com/test/1h9pm6gh31o/questions/epj7khpern7

function constructNote(magazine, note) {
    let mag = new Set(magazine)
    let newnote = new Set(note)

    if(mag.size !== newnote.size || mag.entries() === newnote.entries){
        return false
    }else {
        return true
    }
}

constructNote(["give","me","one","grand","today","night"], ["give","one","grand","today"])