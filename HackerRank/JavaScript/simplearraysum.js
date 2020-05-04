function simpleArraySum(ar) {
    function sum(total, num){
        return total + num
    }
    console.log(`TOTAL: ${ar.reduce(sum)}`)
    return ar.reduce(sum, 0)
}

// Passes!  Complete!
simpleArraySum([1,3,4])
